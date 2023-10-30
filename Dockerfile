FROM node:18 AS react-builder

WORKDIR /app

COPY vite-project ./

RUN npm install

RUN npm run build

FROM golang:1.20 AS go-builder

WORKDIR /app

COPY go.mod  ./

COPY go.sum ./

RUN go mod download

COPY . .

COPY --from=react-builder /app/dist ./vite-project/dist

RUN CGO_ENABLED=0 GOOS=linux go build -o myapp ./cmd/main/main.go

FROM alpine:3.14

COPY --from=go-builder /app/myapp .
EXPOSE 4500
CMD ["./myapp"]

