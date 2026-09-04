if (!window.__genreTagClickFixInstalled) {
	window.__genreTagClickFixInstalled = true;

	document.addEventListener('click', function (e) {
		if (!e.isTrusted) return;

		// Désactive le correctif sur mobile : pas de survol tactile donc
		// pas besoin d'intercepter le clic, le comportement natif suffit.
		// Vérifié à chaque clic (pas juste à l'installation) au cas où
		// Jellyfin bascule cette classe dynamiquement (rotation d'écran,
		// redimensionnement de fenêtre, etc.).
		if (document.querySelector('.layout-mobile')) return;

		const tag = e.target.closest('.overflowBackdropCard .genre-tag, .backdropCard .genre-tag');
		if (!tag) return;

		e.preventDefault();
		e.stopPropagation();

		const x = e.clientX;
		const y = e.clientY;

		tag.style.setProperty('pointer-events', 'none', 'important');
		const under = document.elementFromPoint(x, y);
		tag.style.removeProperty('pointer-events');

		if (under) {
			under.click();
		}
	}, true);

	console.log('[genre-tag-fix] listener installé');
}
