import { NextResponse } from 'next/server';

export async function GET() {
  const healthReport = {
    status: 'ok',
    dependencies: [
      { name: 'database', status: 'ok' },
      { name: 'cache', status: 'ok' },
      { name: 'thirdPartyAPI', status: 'ok' },
    ],
    version: '1.0.0'
  };

  return NextResponse.json(healthReport);
}
