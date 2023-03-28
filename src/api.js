export function loadLists() {
  return [
    {
      title: "A Fazer",
      creatable: true,
      cards: [
        {
          id: 1,
          title: "#boraCodar um Kanban 🧑‍💻",
          content:
            "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.",
          labels: [
            {
              id: 1,
              tag: "rocketseat",
            },
            {
              id: 2,
              tag: "desafio",
            },
          ],
        },
        {
          id: 2,
          title: "Manter a ofensiva 🔥",
          content:
            "Manter minha atividade na plataforma da Rocketseat para não perder a ofensiva",
          labels: [
            {
              id: 1,
              tag: "rocketseat",
            },
          ],
        },
        {
          id: 3,
          title: "Almoçar 🥗",
          content:
            "Me alimentar, aproveitando um momento de descanso para recarregar minhas energias durante o almoço",
          labels: [
            {
              id: 1,
              tag: "autocuidade",
            },
          ],
          user: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png",
        },
        {
          id: 4,
          title: "Curtir post do #boraCodar 💜",
          content:
            "Deixar o like para demonstrar que gostei do novo desafio proposto nas",
          labels: [
            {
              id: 1,
              tag: "rocketseat",
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
          id: 5,
          title: "Conferir o novo desafio 🚀 ",
          content:
            "Conferir o novo projeto do #boraCodar para fazê-lo da melhor maneira possível",
          labels: [
            {
              id: 1,
              tag: "rocketseat",
            },
            {
              id: 2,
              tag: "desafio",
            },
          ],
        },
        {
          id: 6,
          title: "Ser incrível 😎",
          content:
            "Sempre me lembrar de manter minha autenticidade e espalhar amor",
          labels: [
            {
              id: 1,
              tag: "autocuidado",
            },
          ],
        },
      ],
    },
    {
      title: "Feita",
      creatable: false,
      done: true,
      cards: [
        {
          id: 7,
          title: "#boraCodar uma página de login 🧑‍💻",
          content:
            "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.",
          labels: [
            {
              id: 1,
              tag: "rocketseat",
            },
            {
              id: 2,
              tag: "desafio",
            },
          ],
        },
        {
          id: 8,
          title: "#boraCodar uma página de clima 🧑‍💻",
          content:
            "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.",
          labels: [
            {
              id: 1,
              tag: "rocketseat",
            },
            {
              id: 2,
              tag: "desafio",
            },
          ],
        },
      ],
    },
  ];
}
