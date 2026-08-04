# Pengelolaan Pujasera

Sistem manajemen pujasera (food court) berbasis **NestJS** + **Prisma ORM** + **PostgreSQL**.

## Struktur Proyek

```
pengelolaan-pujasera/
├── backend/        ← NestJS API (source utama)
│   ├── src/        ← Source code TypeScript
│   ├── prisma/     ← Schema & migrations database
│   ├── test/       ← E2E tests
│   └── .env        ← Environment variables (tidak di-commit)
└── README.md
```

## Instalasi

```bash
cd backend
npm install
```

## Menjalankan Aplikasi

```bash
cd backend

# Development (watch mode)
npm run start:dev

# Production
npm run start:prod
```

## Database

```bash
cd backend

# Jalankan migrasi
npx prisma migrate dev

# Buka Prisma Studio
npx prisma studio
```

## Menjalankan Tests

```bash
cd backend

# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Coverage
npm run test:cov
```

## Modul API

| Modul        | Endpoint Base   | Deskripsi                    |
|--------------|-----------------|------------------------------|
| Barang       | `/barang`       | Manajemen data barang        |
| Kasir        | `/kasir`        | Manajemen data kasir         |
| Tenan        | `/tenan`        | Manajemen data tenan         |
| Nota         | `/nota`         | Manajemen nota transaksi     |
| Barang Nota  | `/barang-nota`  | Detail item per nota         |

## Tech Stack

- **Framework**: NestJS 11
- **ORM**: Prisma 7
- **Database**: PostgreSQL
- **Language**: TypeScript
