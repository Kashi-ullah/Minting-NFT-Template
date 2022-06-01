import React from 'react'
import './assets/css/bootstrap.min.css';
import './assets/css/style.min.css';
import './assets/css/icofont.min.css';
const MintNfts = () => {
    return (
        <div>
{/* header section start */}
            <header class="header style-2">
                <div class="container-fluid">
                    <div class="header__content">
                        {/* logo here */}
                        <div class="header__logo">
                            <img src='./logo-4.png' alt='logo img not found'></img>
                        </div>
                        {/* search bar here */}
                        <form action="index-2.html#" class="header__search">
                            <input type="text" placeholder="Search items, collections, and creators"></input>
                            <button type="button"><i class="icofont-search-2"></i></button>
                            <button type="button" class="close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path
                                    d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" />
                            </svg></button>
                        </form>
                        <div class="header__menu ms-auto">
                            <ul class="header__nav mb-0">
                                <li class="header__nav-item">
                                    <a class="header__nav-link active home-2" href="index-2.html#" role="button" data-bs-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false" data-bs-offset="0,10">Home</a>

                                    <ul class="dropdown-menu header__nav-menu">
                                        <li><a class="drop-down-item" href="index.html">Home One <span
                                            class="badge bg-theme ms-3">New</span> </a></li>
                                        <li><a class="drop-down-item active home-2" href="index-2.html">Home Two</a></li>
                                        <li><a class="drop-down-item" href="index-3.html">Home Three</a></li>
                                        <li><a class="drop-down-item" href="index-4.html">Home Four</a></li>

                                    </ul>
                                </li>
                                <li class="header__nav-item">
                                    <a class="header__nav-link" href="index-2.html#" role="button" data-bs-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false" data-bs-offset="0,10">Explore</a>

                                    <ul class="dropdown-menu header__nav-menu">
                                        <li><a class="drop-down-item" href="explore.html">Explore NFT's</a></li>
                                        <li><a class="drop-down-item" href="auction.html">Auction Page</a></li>

                                    </ul>
                                </li>
                                <li class="header__nav-item">
                                    <a href="activity.html" class="header__nav-link">Activity</a>
                                </li>

                                <li class="header__nav-item">
                                    <a class="header__nav-link" href="index-2.html#" role="button" data-bs-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false" data-bs-offset="0,10">Blog</a>

                                    <ul class="dropdown-menu header__nav-menu">
                                        <li><a class="drop-down-item" href="blog.html">Blog style 1</a></li>
                                        <li><a class="drop-down-item" href="blog-2.html">Blog style 2</a></li>
                                        <li><a class="drop-down-item" href="blog-3.html">Blog style 3</a></li>
                                        <li><a class="drop-down-item" href="blog-single.html">Blog Single </a></li>
                                        <li><a class="drop-down-item" href="blog-single-2.html">Blog Single 2</a></li>
                                    </ul>
                                </li>

                                <li class="header__nav-item">
                                    <a class="header__nav-link" href="index-2.html#" role="button" data-bs-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false" data-bs-offset="0,10">Pages</a>

                                    <ul class="dropdown-menu header__nav-menu">
                                        <li><a class="drop-down-item" href="item-details.html">NFT Details</a></li>
                                        <li><a class="drop-down-item" href="all-authors.html">ALL Authors</a></li>
                                        <li><a class="drop-down-item" href="all-authors-2.html">ALL Authors 2</a></li>
                                        <li><a class="drop-down-item" href="author.html">Author Profile</a></li>
                                        <li><a class="drop-down-item" href="wallet.html">Wallet Connect</a></li>
                                        <li><a class="drop-down-item" href="404.html">404</a></li>
                                        <li><a class="drop-down-item" href="forgot-pass.html">Forgot Password</a></li>

                                    </ul>
                                </li>

                                <li class="header__nav-item">
                                    <a class="header__nav-link" href="index-2.html#" role="button" data-bs-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false" data-bs-offset="0,10"><svg
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path
                                                d="M12,10a2,2,0,1,0,2,2A2,2,0,0,0,12,10ZM5,10a2,2,0,1,0,2,2A2,2,0,0,0,5,10Zm14,0a2,2,0,1,0,2,2A2,2,0,0,0,19,10Z" />
                                        </svg></a>

                                    <ul class="dropdown-menu header__nav-menu">
                                        <li><a class="drop-down-item" href="contact.html">Contact </a></li>
                                        <li><a class="drop-down-item" href="coming-soon.html">Coming soon</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="header__actions">
                            <div class="header__action header__action--search">
                                <button class="header__action-btn" type="button"><i class="icofont-search-1"></i></button>
                            </div>

                            <div class="header__action header__action--profile">
                                <div class="dropdown">
                                    <a class="dropdown-toggle" href="index-2.html#" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false" data-bs-offset="-100,10">
                                        <span data-blast="bgColor"><i class="icofont-user"></i></span> <span
                                            class="d-none d-md-inline">Alex
                                            Joe</span>
                                    </a>

                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="author.html"><span class="me-1"><i
                                            class="icofont-options"></i></span>
                                            Profile</a></li>
                                        <li><a class="dropdown-item" href="activity.html"><span class="me-1"><i
                                            class="icofont-lightning-ray"></i></span>
                                            Activity</a></li>
                                        <li><a class="dropdown-item" href="signup.html"><span class="me-1"><i
                                            class="icofont-space-shuttle"></i></span>
                                            Sign
                                            Up</a></li>
                                        <li><a class="dropdown-item" href="signin.html"><span class="me-1"><i
                                            class="icofont-login"></i></span> Sign
                                            In</a></li>
                                        <li>
                                            <hr class="dropdown-divider"></hr>
                                        </li>

                                        <li><a class="dropdown-item" href="index-2.html#"> Sign
                                            Out <span class="ms-1"><i class="icofont-logout"></i></span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="wallet-btn">
                                <a href="wallet.html"><span><i class="icofont-wallet" data-blast="color"></i></span> <span
                                    class="d-none d-md-inline">234.98ETH</span> </a>
                            </div>

                        </div>
                        <button class="menu-trigger header__btn" id="menu05">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        
                    </div>
                </div>
            </header>
            {/* Header section end */}
            {/* middle section start */}
            <section class="page-header-section style-1">
                <div class="container">
                    <div class="page-header-content">
                        <div class="page-header-inner">
                            <div class="page-title">
                                <h2>Mint NFT's </h2>
                            </div>

                            <div class="load-btn mt-5">
                                <a class="default-btn move-bottom" onclick="conPhantomFormMintPage()">
                                    Wallet Connect</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* middle section end */}
            <div class=" container">
        <div class="row g-5 align-items-center flex-md-row-reverse">
            <div class="col-lg-5">
                <div class="account-wrapper">
                    <h3 class="title">Mint NFTs</h3>
                    <form class="account-form">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="userIdInput" placeholder="user-id"></input>
                            <label for="userIdInput">Name</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" placeholder="Symbol"></input>
                            <label for="floatingInput">Symol</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingPassword" placeholder="Description"></input>
                            <label for="floatingPassword">Description</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="file" class="form-control" id="floatingPassword" placeholder="Description"></input>
                            <label for="floatingPassword"></label>
                        </div>
                        {/* <!-- add attributes button --> */}
                        <input class="btn btn-primary mb-4" type="button" value="Add Attributes" onclick="addInput()" />

                        <span id="responce"></span>
                        {/* <script>
                            var countBox = 1;
                            var boxName = 0;

                            function addInput() {
                                var boxName = "textBox" + countBox;

                                document.getElementById('responce').innerHTML +=
                                    '<br/><div id="' + boxName + '" value="' + boxName + '" " style="display: flex;"> <input type="text" class="form-control" style="width: 45%; margin: 0 1rem;" id="thread" /> <input type="text" class="form-control" style="width: 45%; margin: 0 1rem;" id="value" /> </div>';

                                // document.getElementById('responce').innerHTML +=
                                //  '<br/><input type="text" class="form-control" style="width: 45%;" id="' + boxName + '" value="' + boxName + '" "/>'
                                //  ;
                                //  var boxName = "textBox" + countBox;
                                //  document.getElementById('responce').innerHTML +=
                                //  '<input type="text" class="form-control" style="width: 45%;" id="' + boxName + '" value="' + boxName + '" "/>'
                                //  ;
                                countBox += 1;
                            }
                        </script> */}

                        <div class="form-group">
                            <button class="d-block default-btn move-top"><span>Submit</span></button>
                        </div>
                    </form>

                </div>
            </div>

            <div class="col-lg-7">
                <div class="account-img">
                    <img src="./01.png" alt="shape-image"></img>
                </div>
            </div>
        </div>

    </div>
        </div>
    )
}

export default MintNfts