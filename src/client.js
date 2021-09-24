import client from '@sanity/client';

export default client({
    projectId:"1a8rzkrj",
    dataset:"production",
    useCdn:true,
    apiVersion:"2021-09-04",
})