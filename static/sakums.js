function saktSpeli()
{
    let ievaditsVards = document.querySelector ('#vārds').value;
    if (ievaditsVards == '')
    {
        alert('Ievadi savu vārdu!');
    }
    else
    {
        window.location = 'spele#' + ievaditsVards;
    }
}