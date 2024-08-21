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
      { id: '1', name: 'Software Development' },
      { id: '2', name: 'Artificial Intelligence and Machine Learning' },
      { id: '3', name: 'Cybersecurity and Data Protection' },
      { id: '4', name: 'Internet of Things (IoT)' },
      { id: '5', name: 'Telecommunications and Networking' },
      { id: '6', name: 'Emerging Technologies (Augmented Reality, Virtual Reality, Blockchain, etc.)' },
      { id: '7', name: 'Cloud Computing and Data Storage' },
      { id: '8', name: 'Web Design and Development' },
      { id: '9', name: 'Hardware and Electronic Devices' },
      { id: '10', name: 'Information Technology and Information Systems' },
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
      title: 'The Future of "Software Development"',
      content: 'Software development is constantly evolving, with new technologies, methodologies, and best practices emerging. In this post, we explore the latest trends and innovations shaping the future of software development, including the rise of low-code/no-code platforms, the increased adoption of Agile and DevOps, and the integration of emerging technologies like artificial intelligence and machine learning.',
      categoryId: '1',
    },
    {
      id: '2',
      userId: '2',
      title: 'Unlocking the Potential of "Artificial Intelligence and Machine Learning"',
      content: 'Artificial Intelligence (AI) has become a transformative force across industries, revolutionizing how we approach problem-solving, decision-making, and automation. In this article, we delve into the latest advancements in AI, from natural language processing to computer vision, and explore the immense potential of this technology to enhance productivity, improve decision-making, and unlock new possibilities.',
      categoryId: '2',
    },
    {
      id: '3',
      userId: '3',
      title: 'Navigating the "Cybersecurity and Data Protection" Landscape',
      content: 'Cybersecurity has become a critical concern for individuals and organizations alike, as the threat of data breaches, malware, and cyber attacks continues to grow. In this post, we examine the evolving landscape of cybersecurity, highlighting the latest threats, best practices for data protection, and the importance of proactive measures to safeguard sensitive information.',
      categoryId: '3',
    },
    {
      id: '4',
      userId: '4',
      title: 'Transforming the World with the "Internet of Things (IoT)"',
      content: 'The Internet of Things (IoT) is revolutionizing the way we interact with our environment, from smart homes to connected cities. In this article, we explore the exciting advancements in IoT technology, the applications across various sectors, and the challenges and opportunities that come with the widespread adoption of this transformative technology.',
      categoryId: '4',
    },
    {
      id: '5',
      userId: '5',
      title: 'Advancing "Telecommunications and Networking"',
      content: 'Telecommunications and networking technologies are the backbone of our increasingly connected world. In this post, we delve into the latest developments in areas such as 5G, cloud computing, and software-defined networking, and discuss how these innovations are shaping the future of communication and data transmission.',
      categoryId: '5',
    },
    {
      id: '6',
      userId: '1',
      title: 'Exploring "Emerging Technologies: AR, VR, and Blockchain"',
      content: 'The world of technology is constantly expanding, with a myriad of innovative solutions emerging that have the potential to transform the way we live and work. In this article, we explore the latest advancements in emerging technologies, including augmented reality, virtual reality, and blockchain, and discuss their far-reaching implications across various industries.',
      categoryId: '6',
    },
    {
      id: '7',
      userId: '2',
      title: 'The Rise of "Cloud Computing and Data Storage"',
      content: 'Cloud computing and data storage have become integral components of modern technology infrastructure, enabling organizations to access scalable, flexible, and cost-effective computing resources. In this post, we examine the evolution of cloud computing, the benefits it offers, and the emerging trends shaping the future of data storage and management.',
      categoryId: '7',
    },
    {
      id: '8',
      userId: '3',
      title: 'Mastering "Web Design and Development"',
      content: 'Web design and development are constantly evolving, with new frameworks, tools, and best practices emerging to create engaging and user-friendly online experiences. In this article, we delve into the latest trends and techniques in web design and development, from responsive design to the integration of emerging technologies, and explore how to build effective and visually appealing websites.',
      categoryId: '8',
    },
    {
      id: '9',
      userId: '4',
      title: 'The Future of "Hardware and Electronic Devices"',
      content: 'As technology continues to advance, the hardware and electronic devices that power our digital landscape are also undergoing significant transformations. In this post, we examine the latest innovations in areas such as consumer electronics, embedded systems, and the integration of emerging technologies like AI and IoT into hardware solutions.',
      categoryId: '9',
    },
    {
      id: '10',
      userId: '5',
      title: 'Navigating the World of "Information Technology and Information Systems"',
      content: 'Information Technology (IT) and Information Systems (IS) are the backbone of modern organizations, enabling seamless data management, communication, and decision-making. In this article, we explore the evolving landscape of IT and IS, highlighting the latest trends, best practices, and the critical role these disciplines play in driving organizational growth and efficiency.',
      categoryId: '10',
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
      { id: '1', postId: '1', userId: '2', content: 'Great insights on the future of "Software Development"!' },
      { id: '2', postId: '2', userId: '3', content: 'Fascinating overview of the potential of "Artificial Intelligence and Machine Learning". Looking forward to more!' },
      { id: '3', postId: '3', userId: '4', content: '"Cybersecurity and Data Protection" is such an important topic, thanks for the comprehensive guide.' },
      { id: '4', postId: '4', userId: '5', content: 'The "Internet of Things (IoT)" revolution is truly transformative, can\'t wait to see what\'s next.' },
      { id: '5', postId: '5', userId: '1', content: 'Excellent article on the advancements in "Telecommunications and Networking".' },
      { id: '6', postId: '6', userId: '2', content: 'Exciting to learn about the latest "Emerging Technologies: AR, VR, and Blockchain", keep them coming!' },
      { id: '7', postId: '7', userId: '3', content: '"Cloud Computing and Data Storage" are so crucial these days, great overview.' },
      { id: '8', postId: '8', userId: '4', content: '"Web Design and Development" is an area I\'m really interested in, thanks for the insights.' },
      { id: '9', postId: '9', userId: '5', content: 'The future of "Hardware and Electronic Devices" is fascinating, can\'t wait to see what\'s next.' },
      { id: '10', postId: '10', userId: '1', content: 'Excellent overview of the world of "Information Technology and Information Systems", extremely helpful for understanding these fields.' },
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
      { id: '7', postId: '7', userId: '3' },
      { id: '8', postId: '8', userId: '4' },
      { id: '9', postId: '9', userId: '5' },
      { id: '10', postId: '10', userId: '1' },
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
      { id: '7', postId: '7', userId: '4' },
      { id: '8', postId: '8', userId: '5' },
      { id: '9', postId: '9', userId: '1' },
      { id: '10', postId: '10', userId: '2' },
    ],
  });
}

main()
  .then(() => {
    console.log('Seeding finished.');
  })
  .catch((e) => {
    console.error('Seeding error:', e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });