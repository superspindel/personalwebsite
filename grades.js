/**
 * Created by viktor on 2017-02-12.
 */

module.exports ={

    getGrades: function(request, cheerio){
    url = 'https://weblogon.ltu.se/cas/login?service=https%3A%2F%2Fportal.ltu.se%2Fc%2Fportal%2Flogin%3Fredirect%3D%252Fgroup%252Fstudent%252Fregisterutskrift%26p_l_id%3D1076063'
    request(url, function(error, response, html)
    {
        if(!error)
        {
            var $ = cheerio.load(html);
            console.log(html);
        }
    });
}
};
