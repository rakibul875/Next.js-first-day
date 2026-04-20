const userData = [
  {
    id: 1,
    name: "Rakibul Islam",
    title: "Frontend Developer",
    email: "rakibul1@example.com",
    age: 22,
    country: "Bangladesh",
    description:
      "Passionate frontend developer who loves building responsive and modern web applications using React and Tailwind CSS.",
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    title: "React Developer",
    email: "nusrat2@example.com",
    age: 21,
    country: "Bangladesh",
    description:
      "Creative React developer focused on building clean UI and reusable components for scalable web apps.",
  },
  {
    id: 3,
    name: "Tanvir Hasan",
    title: "Backend Developer",
    email: "tanvir3@example.com",
    age: 24,
    country: "Bangladesh",
    description:
      "Backend developer specializing in Node.js and Express, building fast and secure APIs.",
  },
  {
    id: 4,
    name: "Sadia Akter",
    title: "UI/UX Designer",
    email: "sadia4@example.com",
    age: 23,
    country: "Bangladesh",
    description:
      "UI/UX designer who focuses on user-friendly and visually appealing interface designs using Figma.",
  },
  {
    id: 5,
    name: "Mehedi Hasan",
    title: "Full Stack Developer",
    email: "mehedi5@example.com",
    age: 25,
    country: "Bangladesh",
    description:
      "Full stack developer experienced in MERN stack applications and database management.",
  },
  {
    id: 6,
    name: "Farzana Rahman",
    title: "Vue Developer",
    email: "farzana6@example.com",
    age: 22,
    country: "Bangladesh",
    description:
      "Vue.js developer focused on building fast and reactive single page applications.",
  },
  {
    id: 7,
    name: "Shakil Ahmed",
    title: "Python Developer",
    email: "shakil7@example.com",
    age: 26,
    country: "Bangladesh",
    description:
      "Python developer working with Django for backend systems and automation tools.",
  },
  {
    id: 8,
    name: "Mim Akter",
    title: "Frontend Intern",
    email: "mim8@example.com",
    age: 20,
    country: "Bangladesh",
    description:
      "Frontend intern learning modern web technologies and improving UI development skills.",
  },
  {
    id: 9,
    name: "Arif Hossain",
    title: "Java Developer",
    email: "arif9@example.com",
    age: 27,
    country: "Bangladesh",
    description:
      "Experienced Java developer working with Spring Boot for enterprise-level applications.",
  },
  {
    id: 10,
    name: "Jannat Sultana",
    title: "Mobile App Developer",
    email: "jannat10@example.com",
    age: 23,
    country: "Bangladesh",
    description:
      "Mobile app developer building cross-platform apps using React Native and Expo.",
  },
];

const page = async ({ params }) => {
  const { userId } = await params;
  const users = userData.find((user) => user.id === parseInt(userId));
  return (
    <div className="">
      {users ? 
        <div className="card bg-primary text-primary-content w-96 hover:scale-105 transition-transform duration-300">
          <div className="card-body">
            <h2 className="card-title">{users.name}</h2>
            <p>{users.email}</p>
            <p>{users.description}</p>
          </div>
        </div>: <h1>User not found</h1>
      }
    </div>
  );
};

export default page;
