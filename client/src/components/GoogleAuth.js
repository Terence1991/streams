import React from 'react'


class GoogleAuth extends React.component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
     window.gapi.client.init({
       clientId: '1025169971631-oj5bh400fi1pugoj0anpdfmi2b4amqk5.apps.googleusercontent.com',
       scope: 'email'
     })
    })
  }

  render() {
    return <div></div>
  }
}

export default GoogleAuth;