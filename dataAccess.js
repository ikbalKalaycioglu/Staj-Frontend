var dataAccess = (function () {

    return {

        getContents: function () {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    getAllContents(this.responseText);
                    getAllCategory(this.responseText);
                }
            };
            xhttp.open("GET", "https://localhost:7064/api/content", true);
            xhttp.send();

        },
        getByTitle: function (title) {
            var xhttp = new XMLHttpRequest();

            var title = title.textContent;
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    getModalFunc(this.responseText);
                }
            };
            xhttp.open("GET", `https://localhost:7064/api/Content/Title?title=${title}`, true);
            xhttp.send();
        },
        ContentCategory: function (baseCategory, subCategory) {
            var xhttp = new XMLHttpRequest();

            var baseCategory = baseCategory.textContent;
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    getAllContents(this.responseText, subCategory);
                }
            };
            xhttp.open("GET", `https://localhost:7064/api/Content/Category?baseCategory=${baseCategory}&secondCategory=${subCategory}`, true);
            xhttp.send();
        },
    }
})();
dataAccess.getContents();