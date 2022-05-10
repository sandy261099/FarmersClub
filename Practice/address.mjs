import dns from 'dns';
const { Resolver } = dns.promises;
const resolver = new Resolver();
resolver.resolve4('bb.csueastbay.edu').then((addresses) => {
    console.log('Address for BlackBoard')
    console.log(addresses);
});