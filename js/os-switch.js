function showOS(os) {
    // Alle OS-Bereiche verstecken
    document.querySelectorAll('.os-content').forEach(el => el.classList.remove('active'));

    // Aktuellen OS-Bereich anzeigen
    document.getElementById(os).classList.add('active');

    // Aktiven Button hervorheben
    document.querySelectorAll('.os-buttons button').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-${os}`).classList.add('active');
}
