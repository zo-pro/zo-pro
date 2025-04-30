<h1 align="center">ZoAI Platform</h1>

<p align="center">
  <img src="https://raw.githubusercontent.com/zo-pro/zoai/main/frontend/public/zoai_logo.png" width="180" alt="CoAI Logo"/>
</p>

<div align="center">
  <h3>A decentralized artificial intelligence collaboration platform built on Solana</h3>

  <p align="center">
    <a href="https://zoai.pro" target="_blank">Website</a> •
    <a href="https://x.com/ZoAI_pro" target="_blank">Twitter</a> •
  </p>
</div>

## Project Overview

The ZoAI platform facilitates collaboration between humans and AI, allowing users to create, accept, and complete various tasks while receiving fair compensation. The platform uses blockchain technology to ensure transparency and security, and provides a skill graph and reputation system to improve collaboration quality.

## Core Features

- **Task Management System**: Create, browse, apply for, and complete tasks
- **Wallet Integration**: Integration with Solana wallets for transactions and payments
- **User Profiles**: Personal information, skill displays, and history
- **AI Assistance Tools**: AI suggestions and collaboration features
- **Reviews & Feedback**: Rating system after task completion
- **Transaction History**: Complete transaction records and details

## $ZoAI Token

The platform is powered by the $ZoAI token, which serves as the primary medium of exchange within the ecosystem. For detailed information about the token, see [TOKEN.md](./TOKEN.md).

## System Architecture

```
┌───────────────────────────────────────────────────────────────────────────┐
│                                                                           │
│                             User Interface Layer                          │
│                                                                           │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────────┐    │
│  │   React Frontend │  │  Material UI     │  │  Wallet Adapters     │    │
│  └──────────────────┘  └──────────────────┘  └──────────────────────┘    │
│                                                                           │
└───────────────┬───────────────────────────────────────────────────────────┘
                │
                ▼
┌───────────────────────────────────────────────────────────────────────────┐
│                                                                           │
│                             Application Layer                             │
│                                                                           │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────────┐    │
│  │  Express.js API  │  │  RESTful Services│  │  JWT Authentication  │    │
│  └──────────────────┘  └──────────────────┘  └──────────────────────┘    │
│                                                                           │
└───────────────┬───────────────────────────────────────┬───────────────────┘
                │                                       │
                ▼                                       ▼
┌───────────────────────────────┐      ┌───────────────────────────────────┐
│                               │      │                                   │
│         Data Layer            │      │      Blockchain Layer             │
│                               │      │                                   │
│  ┌──────────────────────┐    │      │  ┌─────────────────────────────┐  │
│  │      MongoDB         │    │      │  │  Solana Smart Contracts     │  │
│  └──────────────────────┘    │      │  │                             │  │
│                               │      │  │  ┌───────────────────────┐  │  │
│  ┌──────────────────────┐    │      │  │  │  ZoAI Token Program   │  │  │
│  │  User/Task Models    │    │      │  │  └───────────────────────┘  │  │
│  └──────────────────────┘    │      │  │                             │  │
│                               │      │  │  ┌───────────────────────┐  │  │
│                               │      │  │  │  Task Manager Program │  │  │
│                               │      │  │  └───────────────────────┘  │  │
│                               │      │  └─────────────────────────────┘  │
└───────────────────────────────┘      └───────────────────────────────────┘
```

## Technical Stack

### Frontend
- **Framework**: React.js
- **UI Library**: Material-UI
- **State Management**: React Context API
- **Wallet Integration**: Solana Web3.js and Wallet Adapter
- **Testing**: Jest and React Testing Library

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **API Standards**: RESTful architecture

### Blockchain
- **Network**: Solana
- **Smart Contracts**: Rust-based Solana Programs
- **Token Standard**: SPL Token

### DevOps & Tools
- **Version Control**: Git
- **CI/CD**: GitHub Actions
- **Testing**: Jest
- **Linting**: ESLint
- **Package Management**: npm/Yarn

## Project Structure

```
ZoAI-project/
├── frontend/                 # Frontend React application
│   ├── src/
│   │   ├── assets/           # Static assets like images
│   │   ├── components/       # Reusable UI components
│   │   ├── context/          # React Context providers
│   │   ├── hooks/            # Custom React hooks
│   │   ├── pages/            # Page components
│   │   ├── services/         # API service integrations
│   │   ├── styles/           # CSS and styling
│   │   ├── types/            # TypeScript type definitions
│   │   └── utils/            # Utility functions
│   ├── .env.example          # Environment variables example
│   └── package.json          # Frontend dependencies
│
├── backend/                  # Backend Node.js service
│   ├── src/
│   │   ├── config/           # Configuration files
│   │   ├── controllers/      # API business logic
│   │   ├── middleware/       # Express middlewares
│   │   ├── models/           # Database models
│   │   ├── routes/           # API routes
│   │   ├── services/         # External service integrations
│   │   ├── types/            # TypeScript type definitions
│   │   └── utils/            # Utility functions
│   ├── .env.example          # Environment variables example
│   └── package.json          # Backend dependencies
│
├── contracts/                # Solana smart contracts
│   ├── programs/
│   │   ├── ZoAI-token/       # $ZoAI token implementation
│   │   └── task-manager/     # Task marketplace contract
│   └── tests/                # Contract test files
│
├── docs/                     # Documentation
│   └── api/                  # API documentation
│       ├── auth.md           # Auth endpoints
│       ├── users.md          # User endpoints
│       └── ...               # Other API docs
│
├── .github/                  # GitHub config files
│   └── workflows/            # GitHub Actions CI/CD
│
├── setup.sh                  # Project setup script
├── .eslintrc.js              # ESLint configuration
├── jest.config.js            # Jest test configuration
├── tsconfig.json             # TypeScript configuration
├── package.json              # Root package.json for workspaces
├── TOKEN.md                  # $ZoAI token documentation
└── README.md                 # This file
```

## Data Flow Architecture

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│              │     │              │     │              │
│    User      │────▶│   Frontend   │────▶│   Backend    │
│  Interface   │     │  Application │     │     API      │
│              │     │              │     │              │
└──────────────┘     └──────────────┘     └───────┬──────┘
        ▲                   ▲                     │
        │                   │                     ▼
        │                   │              ┌──────────────┐
        │                   │              │              │
        │                   │              │   Database   │
        │                   └──────────────│   (MongoDB)  │
        │                                  │              │
        │                                  └───────┬──────┘
        │                                          │
        │                                          ▼
        │                                  ┌──────────────┐
        │                                  │              │
        └──────────────────────────────────│    Solana    │
                                           │  Blockchain  │
                                           │              │
                                           └──────────────┘
```

### Key Data Flows:

1. **Task Creation Flow**:
   - User creates task on frontend
   - Data validated and stored in MongoDB
   - Token escrow created on Solana blockchain
   - Task status updates reflected in UI

2. **Task Assignment Flow**:
   - Workers browse and apply for tasks
   - Task creator selects worker
   - Assignment recorded in database
   - Smart contract updated with worker's wallet

3. **Task Completion Flow**:
   - Worker submits completed work
   - Creator reviews and approves
   - Smart contract releases payment
   - Reputation system updated
   - Feedback collected

## Core API Endpoints

The ZoAI platform provides a comprehensive API. Detailed documentation for each endpoint can be found in the `/docs/api/` directory:

- Authentication: [/docs/api/auth.md](./docs/api/auth.md)
- User Management: [/docs/api/users.md](./docs/api/users.md)
- Task Management: [/docs/api/tasks.md](./docs/api/tasks.md)
- Transactions: [/docs/api/transactions.md](./docs/api/transactions.md)
- Wallet Integration: [/docs/api/wallet.md](./docs/api/wallet.md)
- AI Services: [/docs/api/ai.md](./docs/api/ai.md)
- Feedback System: [/docs/api/feedback.md](./docs/api/feedback.md)

## Installation and Setup

### Prerequisites
- Node.js (v14+)
- MongoDB
- Solana CLI (for blockchain interactions)

### Using Setup Script
For a streamlined setup process:
```bash
# Clone the repository
git clone https://github.com/zo-pro/ZoAI.git
cd ZoAI

# Make the setup script executable
chmod +x setup.sh

# Run the setup script
./setup.sh
```

### Manual Setup

#### Root Project
```bash
npm install
```

#### Backend Setup
```bash
cd backend
npm install
cp .env.example .env  # Edit .env with your configuration
npm run dev
```

#### Frontend Setup
```bash
cd frontend
npm install
cp .env.example .env  # Edit .env with your configuration
npm start
```

### Running Tests
```bash
# Run all tests
npm test

# Run backend tests only
npm run test:backend

# Run frontend tests only
npm run test:frontend
```

## Development Workflow

1. **Local Development**:
   - Backend server runs on `http://localhost:5000`
   - Frontend development server runs on `http://localhost:3000`
   - API endpoints can be tested with Postman or curl

2. **Testing**:
   - Write unit tests for new features
   - Ensure all tests pass before submitting PRs
   - Coverage reports available in `/coverage` directory

3. **Deployment**:
   - CI/CD pipeline handles testing and deployment
   - Production builds are created with `npm run build`

## Connect With Us

- **Website**: [https://zoai.pro/](https://zoai.pro/)
- **Twitter**: [https://x.com/ZoAI_pro](https://x.com/ZoAI_pro)

## Contributing

We welcome contributions to the ZoAI platform! Please see our [Contributing Guide](./CONTRIBUTING.md) for details on how to get started.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details. 
