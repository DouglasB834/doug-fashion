const categories = [
  {
    id: "chapeus",
    title: "Chapéus",
    image:
      "https://s3-alpha-sig.figma.com/img/a52f/f814/83d3d8af84583c0235383935d7ea4457?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MxrYOrWl~nt~hgK2oxsj0yB9nb3jUp45NObzFpHC~0Sjq0QpLYi2EBa849TmG8ZNlRi0lKdCddncMb8vuzUnBkbA~g-gUTd7dnZysq-sFLS4z3eoifIU-G3qpgqRltI768A4mpSSbtpYjNgL9VVYi2ajr~IhUcO5FgVvMwQeXDL6JdDrBpVWU-4Tb4RoSt8ow3ManVv-YFx-xiKEIH0kvxK9l5hUS9-j3LBxWQlM2YGYdlPB97VDyVNmcHw4YZjFq0ggr-M0~vbLHfh0ebs2gzxD6GWfevsLMpGtPcYgX-m75sTgTG-LNMpQCCH57jrs-itK831ZmZm7qNUFBU-TJA__",
    imageUrl: "/categoria/chapeus",
  },
  {
    id: "tenis",
    title: "Tênis",
    image:
      "https://s3-alpha-sig.figma.com/img/10be/c53e/62e8e245d7dab08a245a82c146fed053?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OrxXEe9luU2PbBq8yRmj-Qhe7eSm4vSVkHx9PHTuJw7Frfxt6uICrQHm4niclvtgs1HQY-re0PA3tYwp~w3n5oGp4B32KvDk9Ktf97pjc~nH4eESbtEUC2gdVDZ0PmsjyTfvHfKKfwYheFDRnfr~N5Pvz8xUka~Njyh7yVYMTsndcido6-I54AlC8zfR~B~ZlMMd1PR~xwYrkdSZCsP6whqQUgEYuS6ATaA0Bm8pX20YzTMlCdS7ndr0CHaNxnQTJZTdObllfGmsDqxh5DPE2vIecfvih1dzCUjUWL2gv6uePGDG5pVzx1SbWDIm4YKs4vDFKUh~SV67XIDox69Vjg__",
    imageUrl: "/categoria/tenis",
  },
  {
    id: "jaquetas",
    title: "Jaquetas",
    image:
      "https://s3-alpha-sig.figma.com/img/4c0a/50ff/d18a8a255fb7f15287b9372bf2bc0a95?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YLTsUIoXHjPZuDdQBhulm6pCOQq3~ha90qdPN-ofGKhv3X8xET6NStPvRYb0l64JvfG~tOBYIqYsbOI-OPoXucoMSGTyZQgEM1mMwoPjJ8bCUiSPnFv3wMrBY~j2o-UwcGbPhMwL3pTHxEz6AdytNqW6xl9GY09ixm1JXELpNt1iodZpWG9O4c7DNOUcchlK3OgP-NEZzVe5wtp53wEykor~7-28W89JnsUDvSAkxlbyFKZnVCB4too42XOcL3mKa0g1AQLrwfeiMngPJ1ImSYI653P9-44TYDIIoQuYj-tDdV90hClgPLz-xSLrljLuhIn5uhBxmWvruChOgbAfGQ__",
    imageUrl: "/categoria/jaquetas",
  },
  {
    id: "feminino",
    title: "Feminino",
    image:
      "https://s3-alpha-sig.figma.com/img/a8e1/9eb7/a839339f627ad4651f7bd40fb2dc9058?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jjErs~~Y7lgeqNbJh6Nw9C6Bbn73RJ8LiYQGU4Vtig863KpNa0T9ogd-mcqH68yLJ5colQzrGdgHsq1xLXmWUgTPwJpgVwHIPlMXIioblvXyTofZyQwlc-rQayvgILG-PDDIzLuFVao4eDi7Hgf9xDjd5LmzlzRgoj4EQn0WXtPyfv5na7QtQSsXa7ZstJa3i8eQ15eimsXizfYWwOhfoEGp6h36E36sQryfwTRq3wWgK-AVOwpliRXh6XdFytzBhfBkdJUWQJZj3Eiibur~-3-jBj5fUzSPztC~i5kqjNYN5PtwjUAyOqqX3kGtOh--fzDy2L4TI0vlBhkFi7KceQ__",
    imageUrl: "/categoria/feminino",
  },
  {
    id: "masculino",
    title: "Masculino",
    image:
      "https://s3-alpha-sig.figma.com/img/d67b/ab3b/57be6a242997cbbb7ca406423cb6adfb?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=amgi93LsSAzn2fabNWsN6NSC22nO2bGxPYOX7XXKVMP2aNsV~P16w2K6jUuQuvTqC7VWeIxdJeIXlySeeT7WhS8AbUd6qLKcGNmAulc37h0ZNScDzrWUwsgNNIzChdPmWVgf-TbXn5b7zCQpR~wZ27oyaxtAPwwwacMfPYs6IsfAUQn9EI5xXY0TcRJKQOc1OdVfMtLBOjbT8zgcFqILxAy55bClQteJuWLNYfD8jOI5p3cyr4FboKVpsEuphtu-qb~0iN14nJepltGeCLgssMOByn2tUD2nji2PzlWnLtB24uAdfdWGB2PkEkgtQC0bC7QozM9Hu9lhwOToBvWM7A__",
    imageUrl: "/categoria/masculino",
  },
];

export default categories;
