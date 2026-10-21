// ==========================================
// TAILWIND CUSTOM CONFIGURATION
// ==========================================
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Cormorant Garamond', 'serif'],
                script: ['Alex Brush', 'cursive'],
            },
            colors: {
                pastel: {
                    blue: '#dbeafe',    // Light baby blue
                    powder: '#bfdbfe',  // Slightly deeper powder blue
                    accent: '#93c5fd',  // Border accent
                    text: '#334155'     // Slate 700 for readable contrast
                }
            }
        }
    }
};

// ==========================================
// MODAL INTERACTION LOGIC
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('profile-modal');
    const modalCard = document.getElementById('modal-card');
    const btnOpen = document.getElementById('open-profile-btn');
    const btnClose = document.getElementById('close-profile-btn');
    const backdrop = document.getElementById('modal-backdrop');

    // Function to open modal
    const openModal = () => {
        modal.classList.remove('hidden');
        
        // Allow display to apply before animating opacity and scale
        setTimeout(() => {
            modal.classList.add('modal-enter-active');
            modal.classList.remove('modal-enter');
            
            modalCard.classList.remove('modal-scale-down');
            modalCard.classList.add('modal-scale-up');
        }, 10);
    };

    // Function to close modal
    const closeModal = () => {
        modal.classList.remove('modal-enter-active');
        modal.classList.add('modal-enter');
        
        modalCard.classList.remove('modal-scale-up');
        modalCard.classList.add('modal-scale-down');
    };

    // Event Listeners
    if (btnOpen) btnOpen.addEventListener('click', openModal);
    if (btnClose) btnClose.addEventListener('click', closeModal);
    if (backdrop) backdrop.addEventListener('click', closeModal);
    
    // Close modal when pressing the Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('modal-enter-active')) {
            closeModal();
        }
    });
});

