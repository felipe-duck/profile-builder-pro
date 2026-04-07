export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  status: 'Concluído' | 'Em andamento' | 'Arquivado';
  year: string;
  githubLink: string;
  highlights: string[];
  image: string;
  detailImage: string;
}

export const ALL_CATEGORIES = ['Todos', 'Segurança', 'Redes', 'Automação', 'Infraestrutura', 'Dev'];

export const PROJECTS: Project[] = [
  {
    id: 'proj-01',
    title: 'Projeto FWC 2026',
    description: 'Projeto voltado para a Copa do Mundo 2026',
    category: 'Todos',
    tags: ['[Tecnologia 1]', '[Tecnologia 2]', '[Tecnologia 3]'],
    status: 'Em andamento',
    year: '2026',
    githubLink: '',
    highlights: [
      '[Funcionalidade ou destaque técnico 1]',
      '[Funcionalidade ou destaque técnico 2]',
      '[Funcionalidade ou destaque técnico 3]',
    ],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    detailImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200',
  },
//  {
//    id: 'proj-02',
//    title: '[Nome do Projeto 2]',
//    description: '[Descrição detalhada do projeto.]',
//    category: 'Automação',
//    tags: ['[Tecnologia 1]', '[Tecnologia 2]'],
//    status: 'Em andamento',
//    year: '2025',
//    githubLink: '',
//    highlights: [
//      '[Funcionalidade ou destaque técnico 1]',
//      '[Funcionalidade ou destaque técnico 2]',
//    ],
//    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
//    detailImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200',
//  },
//  {
//    id: 'proj-03',
//    title: '[Nome do Projeto 3]',
//    description: '[Descrição detalhada do projeto.]',
//    category: 'Redes',
//    tags: ['[Tecnologia 1]', '[Tecnologia 2]', '[Tecnologia 3]'],
//    status: 'Concluído',
//    year: '2024',
//    githubLink: '',
//    highlights: [
//      '[Funcionalidade ou destaque técnico 1]',
//      '[Funcionalidade ou destaque técnico 2]',
//    ],
//    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
//    detailImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200',
//  },
];
