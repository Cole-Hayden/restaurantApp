import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer LjDvXifCBzMTuUYsqMhzEs7FJuW40bwOq87PMBVh3drfuxDQ1MMjvPzCFBd01n-PIR06e-GvwOFS6ltlM29VSnDSyiijpDuSszbJnFOetGXZvP4-FvO98fKP_wsrX3Yx'
    }
});

yelp.get('https://api.yelp.com/v3/businesses/search')