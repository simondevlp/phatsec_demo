const noticeE = document.getElementsByClassName( 'notice' )[ 0 ];
const closeE = document.getElementById( 'close' );

closeE.addEventListener( 'mouseup', () =>
{
    noticeE.setAttribute( 'style', 'display: none' );
} );