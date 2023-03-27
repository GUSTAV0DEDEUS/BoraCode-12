export function loadLists() {
  return [
    {
      title: "A Fazer",
      creatable: true,
      cards: [
        {
          id: 1,
          title: "Hello",
          content: "Estudar módulo 01 de NodeJS",
          labels: [
            {
              id: 1,
              tag: "Oi",
            },
            {
              id: 2,
              tag: "oi",
            },
          ],
        },
        {
          id: 2,
          title: "Hello",
          content:
            "Criar vídeo para o Youtube ensinando a recriar a interface do Pipefy",
          labels: [
            {
              id: 1,
              tag: "Oi",
            },
            {
              id: 2,
              tag: "oi",
            },
          ],
        },
        {
          id: 3,
          title: "Hello",
          content: "Estudar módulo 03 de React Native",
          labels: [
            {
              id: 1,
              tag: "Oi",
            },
            {
              id: 2,
              tag: "oi",
            },
          ],
          user: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png",
        },
        {
          id: 4,
          title: "Hello",
          content:
            'Gravar Aula "NextJS: Utilizando server-side rendering com ReactJS"',
          labels: [
            {
              id: 1,
              tag: "Oi",
            },
            {
              id: 2,
              tag: "oi",
            },
          ],
        },
        {
          id: 5,
          title: "Hello",
          content: "Gravar testes e deploy ReactJS",
          labels: [
            {
              id: 1,
              tag: "Oi",
            },
            {
              id: 2,
              tag: "oi",
            },
          ],
        },
      ],
    },
    {
      title: "Fazendo",
      creatable: false,
      cards: [
        {
          id: 6,
          title: "Hello",
          content: "Recriando clone do Pipefy",
          labels: [],
        },
      ],
    },
    {
      title: "Feita",
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          title: "Hello",
          content: "Gravar aula sobre deploy e CI com React Native",
          labels: [],
        },
        {
          id: 12,
          title: "Hello",
          content: "Gravar testes e deploy ReactJS",
          labels: [
            {
              id: 1,
              tag: "Oi",
            },
            {
              id: 2,
              tag: "oi",
            },
          ],
        },
        {
          id: 13,
          title: "Hello",
          content:
            'Gravar Aula "Internacionalização de aplicações Node.js, ReactJS e React Native"',
          labels: [
            {
              id: 1,
              tag: "Oi",
            },
            {
              id: 2,
              tag: "oi",
            },
          ],
        },
      ],
    },
  ];
}
