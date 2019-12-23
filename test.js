{
	const _ = require('./underscore-min.js');
    const readFile = filename => require('fs').readFileSync(`./data/${filename}`, {encoding:'UTF-8'});
    const csvToObj = csv => {
        const [header, ...body]= _.map(csv.split('\n'), v=>v.split(','));
        return _.map(body, data=>_.reduce(data, (m, v, i)=>(m[header[i]]=v,m),{}));
    };
    const makeScore = () => Math.round(Math.random() * 41 + 60);
    
    const student = csvToObj(readFile('학생.csv'));
    const subject = csvToObj(readFile('교과목.csv'));
    
    _.each(student, i => {
       _.each(subject, j => {
           console.log(`${i['학번']},${j['교과번호']},${makeScore()}`);
       });
    });
}
