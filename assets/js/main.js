const getUsers = async()=>{
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
    return data;
}

const displayUsers = async()=>{
    const users = await getUsers();
    const result= users.map(user=>
                `<div class="card">
                    <div class="img">
                        <svg xmlns="http://www.w3.org/2000/svg" height="70" width="67.5" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7l131.7 0c0 0 0 0 .1 0l5.5 0 112 0 5.5 0c0 0 0 0 .1 0l131.7 0c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2L224 304l-19.7 0c-12.4 0-20.1 13.6-13.7 24.2z"/></svg>
                    </div>
                    <p class="name">${user.name} ( ${user.username} )</p>
                    <p class="email">${user.email}</p>
                    <p class="phone">${user.phone}</p>
                    <div class="company">
                        <div class="company-name">   
                            <p>Company Info </p>
                            <svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
                        </div>
                        <div class="company-info">
                            <p>NAME : ${user.company.name}</p>
                            <p>CATCH PHRASE : ${user.company.catchPhrase}</p>
                            <p>BS : ${user.company.bs}</p>
                        </div>
                    </div> 
                    <p class="website">${user.website}</p>
                    <div class="address">
                        <address>${user.address.street} ${user.address.suite} ${user.address.city} ${user.address.zipcode}
                            <div class="geo">
                                <p>${user.address.geo.lat}</p>
                                <p>${user.address.geo.lng}</p>
                            </div>
                        </address>
                    </div>                  
                </div>`).join('');
    document.querySelector('.row').innerHTML=result;
}

displayUsers();