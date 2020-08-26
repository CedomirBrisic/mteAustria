$(document).ready(function () {
    $(window).scrollTop(0);
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(CSSRulePlugin);


    /*    ---------------------------        SCREENS      ---------------------------------------  */
    /*    ---------------------------        SCREENS      ---------------------------------------  */
    /*    ---------------------------        SCREENS      ---------------------------------------  */

    // gsap.to(".ppt2-background", {
    //     scrollTrigger: {
    //         toggleActions: "play pause resume reset",
    //         trigger: ".ppt2-background-trigger",
    //         start: "top bottom",
    //         end: "bottom 100%",
    //         scrub: 1
    //     },
    //     bottom: "0"
    // })


    // var ppt2after = CSSRulePlugin.getRule(".ppt2-background::after"); //get the rule
    // gsap.to(ppt2after, {
    //     scrollTrigger: {
    //         toggleActions: "play pause resume reset",
    //         trigger: ".ppt2-backgroundafter-trigger",
    //         start: "top bottom",
    //         end: "bottom 100%",
    //         scrub: 1
    //     },
    //     opacity: 0
    // })

    gsap.to(".telefon-wrapper", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt2-background-trigger",
            start: "top bottom",
            end: "bottom 100%",
            scrub: 1
        },
        width: "13.333333333333334VW",
        height: "26.927083333333336VW",
        left: "10.572916666666666VW",
        top: "4vw",
    })


    gsap.to(".ppt1-video-desktop", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt2-background-trigger",
            start: "top bottom",
            end: "top top",
            scrub: 1
        },
        borderRadius: "2vw",
        width: "96.5%",
        left: "1%"
    })




    gsap.to(".telefon-ram", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt2-background-trigger",
            start: "top 2%",
            end: "top top",
            scrub: 1
        },
        widht: "100%",
        height: "100%",
        opacity: 1
    })

    gsap.to(".plusznak", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt2-background-trigger",
            start: "top 60%",
            end: "top 20%",
            scrub: 1
        },
        opacity: 1
    })







    gsap.to(".ppt3-background", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt3-background-trigger",
            start: "top bottom",
            end: "bottom 100%",
            scrub: 1
        },
        bottom: "0"
    })


    var ppt3after = CSSRulePlugin.getRule(".ppt3-background::after"); //get the rule
    gsap.to(ppt3after, {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt3-backgroundafter-trigger",
            start: "top bottom",
            end: "bottom 100%",
            scrub: 1
        },
        opacity: 0
    })



    gsap.to(".ppt4-background", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt4-background-trigger",
            start: "top bottom",
            end: "bottom 100%",
            scrub: 1
        },
        bottom: "0"
    })


    var ppt4after = CSSRulePlugin.getRule(".ppt4-background::after"); //get the rule
    gsap.to(ppt4after, {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt4-backgroundafter-trigger",
            start: "top bottom",
            end: "top 50%",
            scrub: 1
        },
        opacity: 0
    })





    const ppt4ViewportTl = gsap.timeline();
    ppt4ViewportTl.to(".ppt4-background2-viewport", {
        left: "40.76041666666667VW"
    }).to(".ppt4-background2-viewport", {
        height: "100%",
        width: "28vw",
        top: "-1vw",
        left: "36.76041666666667VW"
    }).to(".ppt4-background2-viewport", {
        width: "105%",
        left: "0",
        top: "0",
        borderRadius: "0"
    })

    ScrollTrigger.create({
        toggleActions: "play pause resume reset",
        animation: ppt4ViewportTl,
        toggleActions: "play pause resume reset",
        trigger: ".ppt4-backgroundafter-trigger",
        start: "top 50%",
        end: "bottom bottom",
        scrub: 1
    })


    const ppt4PhoneScannerTl = gsap.timeline();
    ppt4PhoneScannerTl.to(".telefonija-telefon-okvir", {
        left: "37.76041666666667VW"
    }).to(".telefonija-telefon-okvir", {
        top: "-4vw",
        height: "110%",
        width: "39.15vw",
        left: "32vw",
        opacity: 0
    }).to(".telefonija-telefon-okvir", {
        left: "-22vw",
        top: "-8vw",
        width: "150%",
        height: "126%"
    })

    ScrollTrigger.create({
        toggleActions: "play pause resume reset",
        animation: ppt4PhoneScannerTl,
        toggleActions: "play pause resume reset",
        trigger: ".ppt4-backgroundafter-trigger",
        start: "top 50%",
        end: "bottom bottom",
        scrub: 1
    })




    // gsap.to(".ppt4-background2-viewport", {
    //     scrollTrigger: {
    //         toggleActions: "play pause resume reset",
    //         trigger: ".ppt4-backgroundafter-trigger",
    //         start: "top 50%",
    //         end: "top top",
    //         scrub: 1
    //     },
    //     left: "40.76041666666667VW"
    // })


    // gsap.to(".telefonija-telefon-okvir", {
    //     scrollTrigger: {
    //         toggleActions: "play pause resume reset",
    //         trigger: ".ppt4-backgroundafter-trigger",
    //         start: "top 50%",
    //         end: "top top",
    //         scrub: 1
    //     },
    //     left: "37.76041666666667VW"
    // })










    gsap.to(".ppt5-background", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt5-background-trigger",
            start: "top bottom",
            end: "bottom 100%",
            scrub: 1
        },
        bottom: "0"
    })


    var ppt5after = CSSRulePlugin.getRule(".ppt5-background::after"); //get the rule
    gsap.to(ppt5after, {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt5-backgroundafter-trigger",
            start: "top bottom",
            end: "bottom 100%",
            scrub: 1
        },
        opacity: 0
    })



    gsap.to(".ppt6-background", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt6-background-trigger",
            start: "top bottom",
            end: "bottom 100%",
            scrub: 1
        },
        bottom: "0"
    })


    var ppt6after = CSSRulePlugin.getRule(".ppt6-background::after"); //get the rule
    gsap.to(ppt6after, {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt6-backgroundafter-trigger",
            start: "top bottom",
            end: "bottom 100%",
            scrub: 1
        },
        opacity: 0
    })



    gsap.to(".footerGray-container", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".footer-trigger",
            start: "top bottom",
            end: "top 50%",
            scrub: 1
        },
        bottom: "50%"
    })

    gsap.to(".footerBlue-container", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".footer-trigger",
            start: "top 90%",
            end: "top top",
            scrub: 1
        },
        bottom: "0"
    })
    gsap.to(".footer-snake", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".footer-trigger",
            start: "top 90%",
            end: "top top",
            scrub: 1
        },
        left: "100%"
    })

    const footerSocialIconsTl = gsap.timeline();
    footerSocialIconsTl.to(".footer-email-icon", {
        opacity: 1
    }).to(".footer-call-icon", {
        opacity: 1
    }).to(".footer-socialmedia-icon", {
        opacity: 1
    }).to(".footer-poslovnice-icon", {
        opacity: 1
    }).to(".footerGrey-title", {
        opacity: 1
    }).to(".footerGrey-subtitle", {
        opacity: 1
    })
    
    
    ScrollTrigger.create({
        toggleActions: "play pause resume reset",
        animation: footerSocialIconsTl,
        trigger: ".footer-trigger",
        start: "top 95%",
        end: "top top",
        scrub: 1
    })







    /*    ---------------------------        SNAKES      ---------------------------------------  */
    /*    ---------------------------        SNAKES      ---------------------------------------  */
    /*    ---------------------------        SNAKES      ---------------------------------------  */
    gsap.to(".snake-red-1", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt1-initial-trigger",
            start: "top bottom",
            endTrigger: ".ppt2-background-trigger",
            end: "bottom 50%",
            scrub: 1,

        },
        right: "100%"
    })



    gsap.to(".snake-blue-1", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt2-background-trigger",
            start: "top 70%",
            end: "bottom 70%",
            scrub: 1,

        },
        top: "100%"
    })



    gsap.to(".snake-red-2", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt2-background-trigger",
            start: "top 30%",
            endTrigger: ".ppt3-background-trigger",
            end: "top bottom",
            scrub: 1,

        },
        top: "100%"
    })

    gsap.to(".snake-blue-2", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt2-backgroundafter-trigger",
            start: "top 50%",
            endTrigger: ".ppt3-backgroundafter-trigger",
            end: "top bottom",
            scrub: 1,

        },
        bottom: "100%"
    })

    gsap.to(".snake-blue-2-ghost", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt2-backgroundafter-trigger",
            start: "top 50%",
            endTrigger: ".ppt3-backgroundafter-trigger",
            end: "top bottom",
            scrub: 1,

        },
        bottom: "100%"
    })


    gsap.to(".snake-red-3", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt3-background-trigger",
            start: "top 20%",
            scrub: 1,

        },
        bottom: "100%"
    })


    gsap.to(".whitesnake-1", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt3-background-trigger",
            start: "top top",
            scrub: 1,

        },
        left: "100%"
    })


    gsap.to(".snake-blue-3", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt3-backgroundafter-trigger",
            start: "top bottom",
            endTrigger: ".ppt4-background-trigger",
            end: "top top",
            scrub: 1,

        },
        right: "100%"
    })

    gsap.to(".snake-blue-4", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt4-background-trigger",
            start: "top 80%",
            endTrigger: ".ppt5-background-trigger",
            end: "top 70%",
            scrub: 1,

        },
        bottom: "100%"
    })

    gsap.to(".snake-red-4", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt4-background-trigger",
            start: "top 80%",
            endTrigger: ".ppt6-backgroundafter-trigger",
            end: "top top",
            scrub: 1,

        },
        left: "100%"
    })

    gsap.to(".whitesnake-2", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt4-backgroundafter-trigger",
            start: "top bottom",
            endTrigger: ".ppt6-backgroundafter-trigger",
            end: "top top",
            scrub: 1,

        },
        bottom: "100%"
    })



    gsap.to(".snake-blue-5", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt5-background-trigger",
            start: "top 50%",
            endTrigger: ".ppt6-backgroundafter-trigger",
            end: "top top",
            scrub: 1,

        },
        right: "100%"
    })

    gsap.to(".snake-red-5", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt5-backgroundafter-trigger",
            start: "top 90%",
            endTrigger: ".ppt6-backgroundafter-trigger",
            end: "top top",
            scrub: 1,

        },
        bottom: "100%"
    })

    gsap.to(".snake-red-6", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt5-backgroundafter-trigger",
            start: "top 40%",
            endTrigger: ".ppt6-background-trigger",
            end: "top 75%",
            scrub: 1,

        },
        top: "100%"
    })


    gsap.to(".whitesnake-3", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt6-background-trigger",
            start: "top 80%",
            endTrigger: ".footer-trigger",
            end: "top bottom",
            scrub: 1,

        },
        right: "100%"
    })
    gsap.to(".snake-blue-6", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt6-background-trigger",
            start: "top top",
            endTrigger: ".footer-trigger",
            end: "top top",
            scrub: 1,

        },
        bottom: "100%"
    })
    gsap.to(".snake-red-7", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt6-background-trigger",
            start: "top 20%",
            endTrigger: ".footer-trigger",
            end: "top top",
            scrub: 1,

        },
        top: "100%"
    })











    // ------------------------------------ WHITESNAKE ------------------------------------
    gsap.to(".snake-white-1", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt1-initial-trigger",
            start: "top bottom",
            endTrigger: ".ppt2-background-trigger",
            end: "bottom 100%",
            scrub: 1,

        },
        left: "69.84375VW"
    })

    gsap.to(".snake-whiteTitle-1", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt1-initial-trigger",
            start: "top bottom",
            scrub: 1,

        },
        left: "7.5VW"
    })




    gsap.to(".snake-white-2", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt3-background-trigger",
            start: "top bottom",
            end: "bottom 100%",
            scrub: 1
        },
        right: "-2.2916666666666665VW"
    })

    gsap.to(".snake-whiteTitle-2", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt3-background-trigger",
            start: "top bottom",
            end: "bottom 100%",
            scrub: 1,

        },
        left: "2.7083333333333335VW"
    })





    gsap.to(".snake-white-3", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt4-background-trigger",
            start: "top bottom",
            end: "bottom 100%",
            scrub: 1
        },
        left: "59.583333333333336VW"
    })

    gsap.to(".snake-whiteTitle-3", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt4-background-trigger",
            start: "top bottom",
            end: "bottom 100%",
            scrub: 1,

        },
        left: "2.5520833333333335VW"
    })





    gsap.to(".snake-white-4", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt5-background-trigger",
            start: "top bottom",
            end: "bottom 100%",
            scrub: 1
        },
        right: "-3.03125VW"
    })

    gsap.to(".snake-whiteTitle-4", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt5-background-trigger",
            start: "top bottom",
            end: "bottom 100%",
            scrub: 1,

        },
        left: "1.1979166666666667VW"
    })


    gsap.to(".snake-white-5", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt6-background-trigger",
            start: "top bottom",
            end: "bottom 100%",
            scrub: 1
        },
        left: "58.84375VW"
    })

    gsap.to(".snake-whiteTitle-5", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt6-background-trigger",
            start: "top bottom",
            end: "bottom 100%",
            scrub: 1,

        },
        left: "17.55VW"
    })



























    /*  ---------------------------        TITLES      ---------------------------------------  */
    /*  ---------------------------        TITLES      ---------------------------------------  */
    /*  ---------------------------        TITLES      ---------------------------------------  */

    // gsap.to(".ppt1-title1", {
    //     scrollTrigger: {
    //         toggleActions: "play pause resume reset",
    //         trigger: ".ppt1-initial-trigger",
    //         start: "top 70%",
    //         end: "top 10%",
    //         scrub: 1,
    //     },
    //     opacity: 0
    // })

    gsap.to(".ppt1-title2", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt1-initial-trigger",
            start: "top 70%",
            end: "top 10%",
            scrub: 1,
        },
        opacity: 0
    })




    gsap.to(".ppt2-title-desktop", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt2-background-trigger",
            start: "top 50%",
            endTrigger: ".ppt2-backgroundafter-trigger",
            end: "top bottom",
            scrub: 1,

        },
        opacity: 1
    })

    gsap.from(".ppt2-button", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt2-backgroundafter-trigger",
            start: "top bottom",
            end: "top 80%",
            scrub: 1,

        },
        top: "100%",
        opacity: 0
    })


    gsap.from(".ppt2-subtitle-desktop", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt2-backgroundafter-trigger",
            start: "top bottom",
            end: "top 80%",
            scrub: 1,
        },
        right: "-39vw"
    });







    gsap.to(".ppt3-title1", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt3-background-trigger",
            start: "top 50%",
            endTrigger: ".ppt3-backgroundafter-trigger",
            end: "top bottom",
            scrub: 1,

        },
        right: "5.5VW",
        opacity: 1
    })


    gsap.to(".ppt3-subtitle1", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt3-backgroundafter-trigger",
            start: "top bottom",
            end: "top 80%",
            scrub: 1,

        },
        right: "5.5VW",
    })


    gsap.to(".ppt3-button", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt3-backgroundafter-trigger",
            start: "top bottom",
            end: "top 80%",
            scrub: 1,

        },
        right: "5.5VW",
        top: "34VW",
        opacity: 1
    })









    gsap.to(".ppt4-title1-desktop", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt4-background-trigger",
            start: "top 50%",
            endTrigger: ".ppt4-backgroundafter-trigger",
            end: "top bottom",
            scrub: 1,

        },
        right: "5.5VW",
        opacity: 1
    })


    gsap.to(".ppt4-subtitle1", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt4-backgroundafter-trigger",
            start: "top bottom",
            end: "top 80%",
            scrub: 1,

        },
        right: "5.5VW",
        opacity: 1
    })


    gsap.to(".ppt4-button", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt4-backgroundafter-trigger",
            start: "top bottom",
            end: "top 80%",
            scrub: 1,

        },
        right: "5.5VW",
        top: "34VW",
        opacity: 1
    })







    gsap.to(".ppt5-title1", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt5-background-trigger",
            start: "top 50%",
            endTrigger: ".ppt5-backgroundafter-trigger",
            end: "top bottom",
            scrub: 1,

        },
        right: "5.5VW",
        opacity: 1
    })



    gsap.to(".ppt5-subtitle1", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt5-backgroundafter-trigger",
            start: "top bottom",
            end: "top 80%",
            scrub: 1,

        },
        right: "5.5VW",
        opacity: 1
    })



    gsap.to(".ppt5-button", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt5-backgroundafter-trigger",
            start: "top bottom",
            end: "top 80%",
            scrub: 1,

        },
        right: "5.5VW",
        top: "34VW",
        opacity: 1
    })









    gsap.to(".ppt6-title1", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt6-background-trigger",
            start: "top 50%",
            endTrigger: ".ppt6-backgroundafter-trigger",
            end: "top bottom",
            scrub: 1,

        },
        right: "5.5VW",
        opacity: 1
    })



    gsap.to(".ppt6-subtitle1-desktop", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt6-backgroundafter-trigger",
            start: "top bottom",
            end: "top 80%",
            scrub: 1,

        },
        right: "5.5VW",
        opacity: 1
    })


    gsap.to(".ppt6-button1", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt6-backgroundafter-trigger",
            start: "top bottom",
            end: "top 80%",
            scrub: 1,

        },
        right: "5.5VW",
        opacity: 1
    })








    /*  ---------------------------        SIDEBARS      ---------------------------------------  */
    /*  ---------------------------        SIDEBARS      ---------------------------------------  */
    /*  ---------------------------        SIDEBARS      ---------------------------------------  */

    const sidebarEntranceTl = gsap.timeline();
    sidebarEntranceTl.to(".sidebar-topponuda-wrapper", {
            left: 0,
            opacity: 1
        })
        .to(".sidebar-televizija-wrapper", {
            left: 0,
            opacity: 1
        })
        .to(".sidebar-calling-wrapper", {
            left: 0,
            opacity: 1
        }).to(".sidebar-homephone-wrapper", {
            left: 0,
            opacity: 1
        }).to(".sidebar-serije-wrapper", {
            left: 0,
            opacity: 1
        })
    ScrollTrigger.create({
        toggleActions: "play pause resume reset",
        animation: sidebarEntranceTl,
        trigger: ".ppt2-background-trigger",
        start: "top bottom",
        end: "top 80%",
        scrub: 1
    })



    const sidebarMarkerTl = gsap.timeline();
    sidebarMarkerTl.to(".sidebar-marker", {
        top: "5%"
    }).to(".sidebar-marker", {
        top: "34%"
    }).to(".sidebar-marker", {
        top: "62%"
    }).to(".sidebar-marker", {
        top: "63%"
    }).to(".sidebar-marker", {
        top: "80%"
    })
    ScrollTrigger.create({
        toggleActions: "play pause resume reset",
        animation: sidebarMarkerTl,
        trigger: ".ppt2-background-trigger",
        start: "top bottom",
        endTrigger: ".ppt6-backgroundafter-trigger",
        end: "bottom 100%",
        scrub: 1
    })








    $(".sidebar-serije-wrapper").click(function () {
        gsap.to(window, {
            duration: 1,
            scrollTo: ".ppt6-backgroundafter-trigger"
        });
    });


    $(".sidebar-televizija-wrapper").click(function () {
        gsap.to(window, {
            duration: 1,
            scrollTo: ".ppt3-sidebar-target"
        });
    });



    $(".sidebar-calling-wrapper").click(function () {
        gsap.to(window, {
            duration: 1,
            scrollTo: ".ppt4-sidebar-target"
        });
    });



    $(".sidebar-homephone-wrapper").click(function () {
        gsap.to(window, {
            duration: 1,
            scrollTo: ".ppt5-sidebar-target"
        });
    });

    $(".sidebar-topponuda-wrapper").click(function () {
        gsap.to(window, {
            duration: 1,
            scrollTo: ".ppt2-sidebar-target"
        });
    });







    $(".topponuda-telefon1").click(function () {
        alert("iPhone 11 PRO")
    });

    $(".topponuda-telefon2").click(function () {
        alert("Huawei P30 PRO")
    });



























    gsap.to(".telefon", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".ppt2-background-trigger",
            start: "top bottom",
            end: "bottom 100%",
            scrub: 1
        },
        top: "4VW"
    })

    // gsap.to(".plusznak", {
    //     scrollTrigger: {
    //         toggleActions: "play pause resume reset",
    //         trigger: ".ppt2-background-trigger",
    //         start: "top bottom",
    //         end: "bottom 100%",
    //         scrub: 1
    //     },
    //     top: "15.937499999999998VW"
    // })

    // gsap.to(".plusznak", {
    //     scrollTrigger: {
    //         toggleActions: "play pause resume reset",
    //         trigger: ".ppt3-background-trigger",
    //         start: "top 50%",
    //         end: "top 42%",
    //         scrub: 1
    //     },
    //     opacity: 0
    // })






    const topPonudaTelefon1tl = gsap.timeline();
    topPonudaTelefon1tl.from(".topponuda-telefon1", {
            top: "100%",
        }).from(".topponuda-telefon1-red", {
            width: "0",
            left: "42vw"
        })
        .from(".topponuda-telefon1-blue", {
            left: "50vw",
            width: "0"
        }).from(".topponuda-telefon1-red-title", {
            right: "-24vw"
        }).from(".topponuda-telefon1-blue-title", {
            right: "-23.6VW"
        }).to(".topponuda-telefon1-blue", {
            left: "26.927083333333336VW"
        }).to(".topponuda-telefon1-blue", {
            left: "50vw",
            width: "0"
        }).to(".topponuda-telefon1-red", {
            width: "0",
            left: "42vw"
        }).to(".topponuda-telefon1", {
            top: "-100%"
        })
    ScrollTrigger.create({
        toggleActions: "play pause resume reset",
        animation: topPonudaTelefon1tl,
        trigger: ".ppt5-backgroundafter-trigger",
        start: "top bottom",
        end: "bottom bottom",
        scrub: 1
    })


    const topPonudaTelefon2tl = gsap.timeline();
    topPonudaTelefon2tl.to(".topponuda-telefon2", {
            top: "15.5VW",
        }).to(".topponuda-telefon2-red", {
            width: "16.666666666666664VW",
            left: "24.375VW"
        })
        .to(".topponuda-telefon2-blue", {
            left: "26.927083333333336VW",
            width: "16.666666666666664VW"
        }).to(".topponuda-telefon2-red-title", {
            right: "1.4vw"
        }).to(".topponuda-telefon2-blue-title", {
            right: "-3.6VW"
        })
    ScrollTrigger.create({
        toggleActions: "play pause resume reset",
        animation: topPonudaTelefon2tl,
        trigger: ".ppt5-backgroundafter-trigger",
        start: "bottom bottom",
        end: "bottom top",
        scrub: 1
    })




    // gsap.to(".topponuda-telefon2", {
    //     scrollTrigger: {
    //         toggleActions: "play pause resume reset",
    //         trigger: ".ppt5-backgroundafter-trigger",
    //         start: "bottom 80%",
    //         end: "bottom top",
    //         scrub: 1

    //     },
    //     top: "16vw"
    // })




});