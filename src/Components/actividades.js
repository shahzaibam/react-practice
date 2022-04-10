const actividades = [
    {
        timestamp: new Date().getTime(),
        text: "Played Soccer",
        user: {
            id: 1,
            name: "Viruzz1",
            avatar: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909__340.png",
        },
        comments: [{ from: "Ari", text: "Me too!" }]
    },

    {
        timestamp: new Date().getTime(),
        text: "Did anything",
        user: {
            id: 2,
            name: "ElJorge",
            avatar: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909__340.png",
        },
        comments: [{ from: "Julia", text: "Me too!" }, { from: "Julia", text: "Me too!" }, { from: "Julia", text: "Me too!" }]
    }
];

export default actividades;