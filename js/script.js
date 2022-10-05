'use strict'

const UZS = document.querySelector('#usz'),
  USD = document.querySelector('#usd')

UZS.addEventListener('input', (e)=>{
    const request = new XMLHttpRequest()

    request.open('GET', 'json/current.json')
    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
    request.send()

    request.addEventListener('load', ()=>{
        if(request.status ===200){
            const data = JSON.parse(request.response)
            USD.value= (+UZS.value/data.current.usd).toFixed(2)
        }else{
            USD.value = 'Something went wrong'
        }
    })
})