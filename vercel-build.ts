// vercel-build.ts
import { execSync } from 'child_process';

try {
  // Execute o comando prisma generate durante o build
  execSync('prisma generate');
} catch (error) {
  console.error('Erro ao gerar o Prisma Client:', error.message);
  process.exit(1);
}
