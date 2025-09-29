// Quick test to check what the API endpoint receives
const { default: fetch } = require('node-fetch');

async function testAPI() {
  try {
    const testData = {
      firstName: 'Test',
      lastName: 'User',
      email: 'test@example.com',
      company: 'Test Company',
      jobTitle: 'Test Role',
      interests: 'portfolio-construction',
      message: 'This is a test message'
    };

    console.log('Testing API endpoint...');
    console.log('Sending data:', testData);

    const response = await fetch('http://localhost:4000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    console.log('Response status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers));

    const responseData = await response.text();
    console.log('Response body:', responseData);

    if (response.ok) {
      console.log('✅ API call successful');
    } else {
      console.log('❌ API call failed');
    }

  } catch (error) {
    console.error('❌ Error testing API:', error.message);
  }
}

testAPI();
