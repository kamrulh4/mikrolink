# Stage 1 — Build the Next.js app
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy dependency files first for efficient caching
COPY package.json pnpm-lock.yaml ./

# Install pnpm globally
RUN npm install -g pnpm

# Install dependencies (frozen lockfile for reproducibility)
RUN pnpm install --frozen-lockfile

# Copy rest of the app
COPY . .

# Build the Next.js app
RUN pnpm run build

# Stage 2 — Production Image
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Copy only what’s needed for running the app
COPY --from=builder /app/package.json ./
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

# Expose the port Coolify will map
EXPOSE 3000

# Default command
CMD ["pnpm", "start"]
