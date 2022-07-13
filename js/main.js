class MyHeader extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <header>
            <nav>
                <div class="logo">
                    <h4><img src="../img/Harvard_University_logo.svg.png" alt="Logo"></h4>
                </div>

                <ul class="flex-container">
                    <li><a class="active" href="#">Home</a></li>
                    <li><a href="">Product</a></li>
                    <li><a href="">Service</a></li>
                    <li><a href="">Gallery</a></li>
                    <li><a href="">About</a></li>
                </ul>
                <label id="icon">
                    <i class="fas fa-bars"></i>
                </label>
            </nav>
        </header>
        `
    }
}

customElements.define('my-header', MyHeader)


class MyFooter extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="content-footer2">
                <div class="content-footer">
                    <div class="profil">
                        <div class="logo-area">
                            <img src="img/logo2.png" alt="">
                            <span class="logo-name">Harvard University</span>
                        </div>
                        <div class="desc-area">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi laudantium, sed libero nesciunt quaerat facilis cum. Architecto id sint ratione repellat! Est ex quas omnis accusamus? Eaque neque vel ipsam.</p>
                        </div>
                        <div class="social-media">
                            <a href=""><i class='bx bxl-linkedin-square'></i></a>
                            <a href=""><i class='bx bxl-facebook-square'></i></a>
                            <a href=""><i class='bx bxl-instagram-alt' ></i></a>
                            <a href=""><i class='bx bxl-github' ></i></a>
                        </div>
                        <div class="service-area">
                            <ul class="service-header">
                                <li class="service-name">Services</li>
                                <li><a href="#">IT Consulting</a></li>
                                <li><a href="#">Development</a></li>
                                <li><a href="#">Cloud</a></li>
                                <li><a href="#">DevOps $ Support</a></li>
                            </ul>
                        </div>
                        <div class="service-area">
                            <ul class="service-header">
                                <li class="service-name">Industries</li>
                                <li><a href="#">Finance</a></li>
                                <li><a href="#">Public</a></li>
                                <li><a href="#">Smart Office</a></li>
                                <li><a href="#">Retail</a></li>
                            </ul>
                        </div>
                        <div class="service-area">
                            <ul class="service-header">
                                <li class="service-name">Company</li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Join Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr>
                    <div class="footer-bottom">
                        <div class="copy-right">
                            <i class='bx bx-copyright'></i>
                            <span>2022 Harvard University</span>
                        </div>
                        <div class="tou">
                            <a href="#">Term of Use</a>
                            <a href="#">Provacy and Policy</a>
                            <a href="#">Cookies</a>
                        </div>
                    </div>
                </div>
                <h4>Copyright 2022</h4>
            </div>
        </footer>
        `
    }
}

customElements.define('my-footer', MyFooter)



