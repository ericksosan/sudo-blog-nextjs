import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import slugify from 'slugify';

const prisma = new PrismaClient();

async function main() {
  await prisma.like.deleteMany();
  await prisma.comment.deleteMany();
  await prisma.save.deleteMany();
  await prisma.post.deleteMany();
  await prisma.user.deleteMany();
  await prisma.category.deleteMany();

  await prisma.category.createMany({
    data: [
      { id: '1', name: 'Web Development' },
      { id: '2', name: 'Artificial Intelligence' },
      { id: '3', name: 'Cybersecurity' },
      { id: '4', name: 'Internet of Things' },
      { id: '5', name: 'Cloud Computing' },
      { id: '6', name: 'Blockchain' },
    ],
  });

  const users = [
    { id: '1', firstname: 'John', lastname: 'Doe', email: 'john.doe@example.com', password: 'password123', fullname: 'John Doe' },
    { id: '2', firstname: 'Jane', lastname: 'Smith', email: 'jane.smith@example.com', password: 'password123', fullname: 'Jane Smith' },
    { id: '3', firstname: 'Alice', lastname: 'Johnson', email: 'alice.johnson@example.com', password: 'password123', fullname: 'Alice Johnson' },
    { id: '4', firstname: 'Bob', lastname: 'Brown', email: 'bob.brown@example.com', password: 'password123', fullname: 'Bob Brown' },
    { id: '5', firstname: 'Charlie', lastname: 'Davis', email: 'charlie.davis@example.com', password: 'password123', fullname: 'Charlie Davis' },
  ];

  const hashedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return { ...user, password: hashedPassword };
    })
  );

  await prisma.user.createMany({
    data: hashedUsers,
  });

  const posts = [
    {
      id: '1',
      userId: '1',
      title: 'The Evolution of Modern Web Development',
      content: `
## The Evolution of Modern Web Development

Web development has rapidly evolved over the past few years, driven by advancements in technology and changes in user behavior. From the introduction of responsive design to the rise of JavaScript frameworks, the field has undergone significant transformations. In this post, we will explore how modern web development has evolved, highlighting key trends such as:

- **Progressive Web Apps (PWAs):** Offering native app-like experiences on the web.
- **Static Site Generators (SSGs):** Enhancing performance with pre-rendered pages.
- **Jamstack Architecture:** Revolutionizing the way we build websites.

Whether you're a seasoned developer or just starting out, staying up-to-date with these trends is crucial for building fast, efficient, and scalable web applications.
      `,
      categoryId: '1',
    },
    {
      id: '2',
      userId: '2',
      title: 'Harnessing the Power of Artificial Intelligence in Business',
      content: `
## Harnessing the Power of Artificial Intelligence in Business

Artificial Intelligence (AI) is transforming industries by automating tasks, enhancing decision-making, and driving innovation. This article delves into the ways AI is being integrated into business strategies, from predictive analytics to customer service automation. Key topics include:

- **Machine Learning Algorithms:** How businesses are leveraging data to predict trends and behaviors.
- **AI-Powered Customer Support:** The rise of chatbots and virtual assistants.
- **Ethical AI:** Balancing innovation with privacy and fairness.

By understanding these applications, businesses can unlock new opportunities and stay competitive in a rapidly changing landscape.
      `,
      categoryId: '2',
    },
    {
      id: '3',
      userId: '3',
      title: 'Building a Robust Cybersecurity Strategy for Your Organization',
      content: `
## Building a Robust Cybersecurity Strategy for Your Organization

In an era where data breaches and cyber threats are becoming increasingly common, a robust cybersecurity strategy is essential for any organization. This post provides a comprehensive guide to developing a cybersecurity plan that protects your digital assets and ensures compliance with regulations. Topics covered include:

- **Risk Assessment:** Identifying and prioritizing potential threats.
- **Security Best Practices:** Implementing multi-factor authentication, encryption, and regular audits.
- **Incident Response:** Preparing for and responding to security breaches.

By following these guidelines, organizations can significantly reduce the risk of cyber attacks and safeguard their sensitive information.
      `,
      categoryId: '3',
    },
    {
      id: '4',
      userId: '4',
      title: 'The Impact of IoT on Smart Cities and Urban Development',
      content: `
## The Impact of IoT on Smart Cities and Urban Development

The Internet of Things (IoT) is revolutionizing urban development by enabling smart cities that are more efficient, sustainable, and connected. In this post, we explore the various ways IoT is being utilized to improve city infrastructure, including:

- **Smart Traffic Management:** Reducing congestion and improving transportation efficiency.
- **Energy Efficiency:** Implementing smart grids and renewable energy sources.
- **Public Safety:** Enhancing security with IoT-enabled surveillance and emergency response systems.

The integration of IoT into urban planning is transforming how cities operate, making them more livable and resilient.
      `,
      categoryId: '4',
    },
    {
      id: '5',
      userId: '5',
      title: 'Exploring the Future of Cloud Computing',
      content: `
## Exploring the Future of Cloud Computing

Cloud computing has become the backbone of modern IT infrastructure, offering scalable, flexible, and cost-effective solutions for businesses of all sizes. This article examines the future of cloud computing, focusing on emerging trends and technologies such as:

- **Hybrid and Multi-Cloud Strategies:** Combining public and private clouds for optimal performance.
- **Serverless Computing:** Simplifying the deployment and management of applications.
- **Cloud-Native Development:** Building applications that fully leverage the cloud's capabilities.

As cloud computing continues to evolve, businesses must adapt to these changes to stay ahead of the curve and maximize the benefits of cloud technologies.
      `,
      categoryId: '5',
    },
    {
      id: '6',
      userId: '1',
      title: 'Blockchain Beyond Cryptocurrency: Real-World Applications',
      content: `
## Blockchain Beyond Cryptocurrency: Real-World Applications

While blockchain is best known as the technology behind cryptocurrencies like Bitcoin, its potential extends far beyond digital currencies. This post explores the various real-world applications of blockchain technology across different industries, including:

- **Supply Chain Management:** Enhancing transparency and traceability.
- **Healthcare:** Securing patient data and streamlining medical records.
- **Smart Contracts:** Automating agreements and reducing the need for intermediaries.

By understanding these applications, businesses and developers can harness the power of blockchain to innovate and solve complex challenges.
      `,
      categoryId: '6',
    },
  ];

  const postsSlugged = posts.map((post) => {
    const slug = slugify(post.title, { lower: true, strict: true });
    return {
      ...post,
      slug,
    };
  });

  await prisma.post.createMany({
    data: postsSlugged,
  });

  await prisma.comment.createMany({
    data: [
      { id: '1', postId: '1', userId: '2', content: 'Insightful post on the evolution of web development, very informative!' },
      { id: '2', postId: '2', userId: '3', content: 'Great article on AI, I learned a lot about its business applications.' },
      { id: '3', postId: '3', userId: '4', content: 'This guide on cybersecurity is a must-read for anyone in the field.' },
      { id: '4', postId: '4', userId: '5', content: 'IoT is indeed transforming our cities, excellent analysis!' },
      { id: '5', postId: '5', userId: '1', content: 'Cloud computing is the future, thanks for the deep dive.' },
      { id: '6', postId: '6', userId: '2', content: 'Interesting take on blockchain, beyond just cryptocurrencies.' },
    ],
  });

  await prisma.like.createMany({
    data: [
      { id: '1', postId: '1', userId: '2' },
      { id: '2', postId: '2', userId: '3' },
      { id: '3', postId: '3', userId: '4' },
      { id: '4', postId: '4', userId: '5' },
      { id: '5', postId: '5', userId: '1' },
      { id: '6', postId: '6', userId: '2' },
    ],
  });

  await prisma.save.createMany({
    data: [
      { id: '1', postId: '1', userId: '3' },
      { id: '2', postId: '2', userId: '4' },
      { id: '3', postId: '3', userId: '5' },
      { id: '4', postId: '4', userId: '1' },
      { id: '5', postId: '5', userId: '2' },
      { id: '6', postId: '6', userId: '3' },
    ],
  });

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
