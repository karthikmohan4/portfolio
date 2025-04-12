const skills = [
  {
    title: 'Javascript',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Dart',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Typescript',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'React',
    competency: 4,
    category: ['Frontend Development'],
  },
  {
    title: 'Flutter',
    competency: 4,
    category: ['Mobile App Development'],
  },
  {
    title: 'Node.JS',
    competency: 4,
    category: ['Backend Development'],
  },
  {
    title: 'Svelte',
    competency: 3,
    category: ['Frontend Development'],
  },
  {
    title: 'Amazon Web Services/Azure',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'MongoDB',
    competency: 3,
    category: ['Databases'],
  },
  {
    title: 'Firebase',
    competency: 3,
    category: ['Databases'],
  },
  {
    title: 'ElasticSearch',
    competency: 2,
    category: ['Databases'],
  },
  {
    title: 'MySQL/PostgreSQL',
    competency: 4,
    category: ['Databases'],
  },
  {
    title: 'Redis',
    competency: 3,
    category: ['Backend Development', 'Databases'],
  },
  {
    title: 'HTML & CSS',
    competency: 3,
    category: ['Frontend Development'],
  },
  {
    title: 'Express.JS',
    competency: 4,
    category: ['Backend Development'],
  },
  {
    title: 'Git',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'CI/CD',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'System Design - LLD & HLD',
    competency: 2,
    category: ['System Design'],
  },
  {
    title: 'Microservices',
    competency: 3,
    category: ['System Design'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
