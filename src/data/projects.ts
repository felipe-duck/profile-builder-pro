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
  // Novos campos adicionados para espelhar a estrutura de laboratórios
  howItWorks: string[];   // Passos explicando como o projeto funciona
  tools: string[];        // Ferramentas utilizadas no projeto
  objective: string;      // Objetivo principal do projeto (substitui "Resultado")
  notes: string;          // Texto bruto / resumo livre do projeto (pode conter múltiplos parágrafos)
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
    // --- Preencher os campos abaixo com as informações reais do projeto ---
    howItWorks: [
      '[Passo 1: Descreva a etapa inicial do projeto]',
      '[Passo 2: Descreva a configuração do ambiente]',
      '[Passo 3: Explique o fluxo principal]',
      '[Passo 4: Descreva os testes ou validações]',
      '[Passo 5: Resultados e próximos passos]',
    ],
    tools: ['[Ferramenta A]', '[Ferramenta B]', '[Ferramenta C]'],
    objective: '[Descreva o objetivo principal do projeto e o que se espera alcançar com ele]',
    // notes: texto bruto / resumo livre — use \n\n para separar parágrafos se necessário
    notes: 'Escreva aqui um resumo mais detalhado do funcionamento do projeto, contexto técnico, decisões de arquitetura ou qualquer informação relevante em formato livre',
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
//    howItWorks: [
//      '[Passo 1]',
//      '[Passo 2]',
//      '[Passo 3]',
//    ],
//    tools: ['[Ferramenta A]', '[Ferramenta B]'],
//    objective: '[Objetivo do projeto]',
//    notes: '[Resumo livre do projeto]',
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
//    howItWorks: [
//      '[Passo 1]',
//      '[Passo 2]',
//      '[Passo 3]',
//    ],
//    tools: ['[Ferramenta A]', '[Ferramenta B]', '[Ferramenta C]'],
//    objective: '[Objetivo do projeto]',
//    notes: '[Resumo livre do projeto]',
//    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
//    detailImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200',
//  },
];
