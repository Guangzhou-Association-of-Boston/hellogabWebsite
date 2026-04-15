document.addEventListener("DOMContentLoaded", () => {
    const btnShowMore = document.getElementById("btn-show-more");
    // Select cards explicitly marked as toggleable
    const toggleableCards = document.querySelectorAll(".toggleable-card");
    
    if (btnShowMore && toggleableCards.length > 0) {
        let isShowingMore = false;
        
        btnShowMore.addEventListener("click", () => {
            isShowingMore = !isShowingMore;
            
            toggleableCards.forEach(card => {
                if (isShowingMore) {
                    card.classList.remove("hidden-card");
                } else {
                    card.classList.add("hidden-card");
                }
            });
            
            btnShowMore.textContent = isShowingMore ? "Show Less" : "Show More";
        });
    }
});