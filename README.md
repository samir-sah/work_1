# work_1 — Device Order Management Dashboard

A fullstack admin dashboard for managing device orders. Built with a **Next.js** frontend and an **Express + MongoDB** backend.

---

## Tech Stack

| Layer    | Technology                              |
|----------|-----------------------------------------|
| Frontend | Next.js 16, React 19, Tailwind CSS 4   |
| Backend  | Express.js 5, Mongoose 9               |
| Database | MongoDB                                 |

---

## Project Structure

```
work_1/
├── client/          # Next.js frontend
│   ├── app/         # App router pages
│   └── components/  # Header, Sidebar
└── server/          # Express REST API
    └── src/
        ├── controllers/
        ├── models/
        ├── routes/
        ├── db/
        └── utils/
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB instance (local or Atlas)

---

### Backend

```bash
cd server
npm install
```

Create a `.env` file in `server/`:

```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
CORS_ORIGIN=http://localhost:3000
```

```bash
npm run dev     # development (nodemon)
npm start       # production
```

---

### Frontend

```bash
cd client
npm install
npm run dev
```

Visit `http://localhost:3000`

---

## API Reference

Base URL: `http://localhost:8000/api`

### Orders

| Method | Endpoint              | Description                          |
|--------|-----------------------|--------------------------------------|
| GET    | `/orders`             | List all orders (paginated)          |
| GET    | `/orders/:orderId`    | Get a single order by ID             |

#### Query Parameters — `GET /orders`

| Param    | Type   | Description                          |
|----------|--------|--------------------------------------|
| `page`   | number | Page number (default: `1`)           |
| `limit`  | number | Results per page (default: `10`)     |
| `status` | string | Filter by status (`placed`, `shipped`, `delivered`, `cancelled`) |
| `search` | string | Search by order ID (regex)           |

---

## Order Schema

```
orderId          String   (unique, required)
userId           String
orderItem[]      { productId, productName, price, quantity }
currentStatus    placed | shipped | delivered | cancelled
statusHistory[]  { status, timestamp }
payment          { method, status }
totalAmount      Number
shippingCharges  Number
expectedArrivalDate  Date
```

---

## Frontend Pages

| Route        | Description          |
|--------------|----------------------|
| `/dashboard` | Overview dashboard   |
| `/orders`    | Order management     |
| `/customer`  | Customer list        |
| `/revenue`   | Revenue analytics    |

---

## License

ISC
