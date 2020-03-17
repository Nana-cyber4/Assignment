const router = require('express').Router();

const students = [{
        name: "Patric Awuah Darko",
        DOB: "12/20/1998",
        program: "BSC Informatoin Technology",
        level: "200",
        image: "/images/awuah.jpg"
    },
    {
        name: "Emmanuel Ansah",
        DOB: "12/10/1990",
        program: "BSC Bioinformatic",
        level: "200",
        image: "/images/dean.jpg"
    },
    {
        name: "Kelvin Loop",
        DOB: "12/2/1998",
        program: "BSC CS",
        level: "200",
        image: "/images/kelvin.jpg"
    },
    {
        name: "Mary Volk",
        DOB: "2/2/2000",
        program: "BSC ICT",
        level: "200",
        image: "/images/victor.jpg"
    },
]

router.get('/', (req, res) => {
    res.render('home', {
        title: 'Home',
        students
    })
});

router.get('/studentdetails/:id', (req, res) => {
    const id = req.params.id;
    const student = students[id];
    res.render('studentdetails.ejs', {
        title: students[id].name,
        student
    })
});
module.exports = router;