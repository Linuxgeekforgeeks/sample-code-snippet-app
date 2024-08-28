// app/api/codesnippets/route.js
import prisma from '../../../lib/PrismaClient';

export async function GET() {
  try {
    const codeSnippets = await prisma.codeSnippet.findMany();
    return new Response(JSON.stringify(codeSnippets), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch code snippets' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function POST(request) {
  const { demoUrl, videoUrl, code, description } = await request.json();
  
  try {
    const codeSnippet = await prisma.codeSnippet.create({
      data: { demoUrl, videoUrl, code, description },
    });
    return new Response(JSON.stringify(codeSnippet), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to create code snippet' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
