!function (t, e) {
    "use strict";
    var o, n, a, r, i, s, l, u, d, h, c, g, m, f = document.getElementsByTagName("body")[0], p = document.getElementsByClassName("username")[0], v = document.getElementsByClassName("account")[0], w = document.getElementsByClassName("app_img")[0], y = document.getElementById("app_upload"), _ = document.getElementById("upload_bg"), C = document.getElementsByClassName("gray_layer")[0], E = document.getElementsByClassName("crop_window")[0], I = document.getElementsByClassName("crop_main")[0], b = document.getElementById("crop_workplace"), B = (document.getElementsByClassName("crop_border")[0], document.getElementById("crop_cancel")), k = document.getElementById("crop_confirm"), T = (document.getElementById("crop_reload"), document.getElementById("hidden_workplace")), L = document.getElementById("gray_workplace"), A = document.getElementsByClassName("dec_text"), D = document.getElementById("type_a"), R = document.getElementById("type_b"), M = document.getElementsByClassName("edit_area")[0], N = document.getElementsByClassName("first_btn")[0], P = document.getElementById("boy"), x = document.getElementById("girl"), U = document.getElementById("obj"), O = document.getElementById("image_field"), S = (document.getElementById("main_form"), document.getElementById("upload_form")), H = document.getElementById("post_img"), $ = document.getElementsByClassName("post_img_outer")[0], X = document.getElementsByClassName("preview_area_w")[0], Q = document.getElementsByClassName("update_btn")[0], G = document.getElementsByClassName("close")[0], F = document.getElementsByClassName("loading-bar")[0], K = document.getElementsByClassName("download")[0], z = document.getElementsByClassName("weibo")[0], Y = document.getElementsByClassName("weixin_share")[0], J = document.getElementsByClassName("share")[0], W = document.getElementById("qrcode"), j = document.getElementsByClassName("color"), Z = document.getElementsByClassName("gender")[0], q = document.getElementsByClassName("gender_list")[0], V = document.getElementById("callback_frame"), tt = document.getElementsByClassName("app_dec")[0], et = document.getElementById("zoom"), ot = document.getElementsByClassName("zoom")[0], nt = document.getElementsByClassName("zoom_bar_blue")[0], at = document.getElementsByClassName("zoom_bar")[0], rt = document.getElementById("zoom_handle"), it = document.getElementById("zoom_out"), st = document.getElementById("zoom_in"), lt = document.getElementsByClassName("edit")[0], ut = document.getElementById("loading_icon"), dt = document.getElementsByClassName("img_bg")[0], ht = 0, ct = 0, gt = 1, mt = 1, ft = {
        style: 1,
        img: null,
        dec: [],
        color: null,
        gender: 1,
        source: 'pc',
    }, pt = !1, vt = [["能", "能", "能", "能", "能", "能", "能", "能", "还能", ""], ["会", "会", "会", "会", "会", "会", "会", "会", "还会", ""]], wt = ["能", "能", "能", "能", "能", "能", "能", "能", "还能"], yt = [], _t = [], Ct = {}, Et = T.getContext("2d"), It = L.getContext("2d"), bt = b.getContext("2d"), Bt = {
        image: null,
        color: null,
        fitWidth: null,
        fitHeight: null,
        fitTop: null,
        fitLeft: null,
        minZoom: null,
        maxZoom: null,
        zoomPos: null,
        thumbnail: null
    }, kt = "1rhabid1t482plRLs6TL6", Tt = 0, Lt = null, At = -1 !== navigator.userAgent.indexOf("MSIE 9"), Dt = function (t, e) {
        var o, n = t.className.split(" ");
        for (o = 0; o < n.length; o++)if (n[o] === e)return;
        t.className += " " + e
    }, Rt = function (t, e) {
        var o, n = t.className.split(" ");
        for (o = 0; o < n.length; o++)n[o] === e && (n.splice(o, 1), o--);
        t.className = n.join(" ")
    }, Mt = function (t, e) {
        var o, n = t.className.split(" ");
        for (o = 0; o < n.length; o++)if (n[o] === e)return !0;
        return !1
    }, Nt = function () {
        et.style.opacity = d === h ? .3 : 1, Rt(E, "error"), Rt(E, "hidden"), Rt(C, "hidden")
    }, Pt = function () {
        I.style.background = "", y.value = null, j[mt - 1].checked = !0, Dt(C, "hidden"), Dt(E, "hidden"), Rt(E, "loaded"), Rt(E, "error")
    }, xt = function () {
        var t, e, i, s, d, h, c, f = (l - a) * (g.height / n), p = (u - r) * (g.width / o), v = 232 * (g.width / o), w = 380 * (g.height / n);
        for (L.width = 232, L.height = 380, It.drawImage(g, p, f, v, w, 0, 0, 232, 380), h = It.getImageData(0, 0, o, n), c = h.data.length, t = 0; c > t; t += 4)e = h.data[t], i = h.data[t + 1], s = h.data[t + 2], d = .299 * e + .587 * i + .114 * s, h.data[t] = h.data[t + 1] = h.data[t + 2] = Math.round(d);
        It.putImageData(h, 0, 0), bt.drawImage(L, u, l), bt.drawImage(m, u, l), bt.beginPath(), bt.lineWidth = 1, bt.strokeStyle = "rgba(255, 255, 255, 0.6)", bt.rect(152.5, 54.5, 231, 379), bt.stroke()
    }, Ut = function () {
        bt.drawImage(m, u, l), bt.beginPath(), bt.lineWidth = 1, bt.strokeStyle = "rgba(255, 255, 255, 0.6)", bt.rect(152.5, 54.5, 231, 379), bt.stroke(), bt.beginPath(), bt.fillStyle = "rgba(0, 0, 0, 0.8)", bt.rect(r, a, o, l - a), bt.fill(), bt.beginPath(), bt.fillStyle = "rgba(0, 0, 0, 0.8)", bt.rect(u + i, l, o + r - i - u, s), bt.fill(), bt.beginPath(), bt.fillStyle = "rgba(0, 0, 0, 0.8)", bt.rect(r, l + s, o, n + a - s - l), bt.fill(), bt.beginPath(), bt.fillStyle = "rgba(0, 0, 0, 0.8)", bt.rect(r, l, u - r, s), bt.fill()
    }, Ot = function () {
        var t = (c.width, c.height, 232), e = 380;
        b.width = 534, b.height = 489, l = 54, u = 152, i = 232, s = 380, Qt(), o = Math.round(c.width * d), n = Math.round(c.height * d), a = 54 + Math.round((e - n) / 2), r = 152 + Math.round((t - o) / 2), T.width = 2 * o, T.height = 2 * n, Et.drawImage(c, 0, 0, 2 * o, 2 * n);
        var h, m, f, p, v, w = Et.getImageData(0, 0, 2 * o, 2 * n), y = w.data.length;
        for (h = 0; y > h; h += 4)m = w.data[h], f = w.data[h + 1], p = w.data[h + 2], v = .299 * m + .587 * f + .114 * p, w.data[h] = w.data[h + 1] = w.data[h + 2] = Math.round(v);
        Et.putImageData(w, 0, 0), ht = 0, nt.style.width = ht + "px", rt.style.left = ht - 16 + "px", g = new Image, g.src = T.toDataURL(), g.onload = function () {
            T.width = o, T.height = n, Et.drawImage(g, 0, 0, o, n), qt(function () {
                bt.drawImage(g, r, a, o, n), Dt(E, "loaded"), Ut()
            })
        }
    }, St = function () {
        return JSON.parse(V.contentWindow.document.body.innerText)
    }, Ht = function () {
        var t = St();
        if (0 === t.code)c = new Image, c.setAttribute('crossOrigin', 'anonymous'), c.src = t.data.image, c.onload = Ot; else {
            if (1001 === t.errInfo.code)return void(location.href = "http://aiwan.shenyou.tv/");
            alert(t.errInfo.msg), Pt()
        }
    }, $t = function () {
        if (y.value)if (Nt(), this.files) {
            var e = this.files[0];
            if (t.URL && t.URL.createObjectURL)c = new Image, c.src = t.URL.createObjectURL(e), c.onload = Ot; else {
                var o = new FileReader;
                o.onload = function (t) {
                    c = new Image, c.src = t.target.result, c.onload = Ot
                }, o.readAsDataURL(e)
            }
        } else S.submit(), V.onload = Ht
    }, Xt = function (t, e) {
        var d = a + e, h = r + t;
        (d > l || l + s - n > d) && (d = a), (h > u || u + i - o > h) && (h = r), r = h, a = d, b.width = 534, b.height = 489, bt.drawImage(T, r, a), Ut()
    }, Qt = function () {
        var t = c.width, e = c.height, o = t / e, n = 990 / 1620;
        o > n ? (d = s / e, h = s / 1309) : (d = i / t, h = i / 800), d > h && (h = d), h = 4 * d, et.style.opacity = d === h ? .3 : 1
    }, Gt = function (t) {
        return
    }, Ft = function () {
        if (Mt(E, "error"))return void Pt();
        if (Mt(E, "loaded")) {
            var t, e = (l - a) * (c.height / n), i = (u - r) * (c.width / o), s = 232 * (c.width / o), f = 380 * (c.height / n);
            for (t = 0; 7 > t; t++)if (j[t].checked) {
                mt = t + 1;
                break
            }
            Bt.image = c, Bt.color = mt, Bt.fitWidth = o, Bt.fitHeight = n, Bt.fitTop = a, Bt.fitLeft = r, Bt.minZoom = d, Bt.maxZoom = h, Bt.zoomPos = ht, Bt.thumbnail = g, T.width = s, T.height = f, Et.drawImage(c, -i, -e), O.value = T.toDataURL(), T.width = 108, T.height = 177, Et.drawImage(c, i, e, s, f, 0, 0, 108, 177);
            var p, v, I, b, B = Et.getImageData(0, 0, 108, 177), k = B.data.length;
            for (t = 0; k > t; t += 4)p = B.data[t], v = B.data[t + 1], I = B.data[t + 2], b = .299 * p + .587 * v + .114 * I, B.data[t] = B.data[t + 1] = B.data[t + 2] = Math.round(b);
            Et.putImageData(B, 0, 0), Et.drawImage(m, 0, 0, m.width, m.height, 0, 0, 108, 177), _.style.backgroundImage = "url(" + T.toDataURL() + ")", T.width = 0, T.height = 0, Dt(C, "hidden"), Dt(E, "hidden"), Rt(E, "loaded"), y.style.top = "-500px", Dt(w, "uploaded"), y.value = null, Yt()
        }
    }, Kt = function () {
        var t = 0, e = "", o = kt.substr(14);
        for (e = parseInt(kt.substr(7, 7), 36) + e, e = parseInt(kt.substr(0, 7), 36) + e, kt = []; e[t];)kt[t >> 1] = e[++t - 1], kt[t - 1 >> 1] += e[t++];
        return f.onkeydown = function (t) {
            t.keyCode + "" === kt[Tt] ? (Tt++, clearTimeout(Lt), Lt = setTimeout(function () {
                Tt = 0
            }, 1e3)) : Tt = 0, 10 === Tt && (Tt = 0, location.href = 831805..toString(36) + function (t) {
                    var e = "";
                    for (var o in arguments)e += decodeURIComponent("%" + arguments[o]);
                    return e
                }.apply(null, "3A-2F-2F-74-2E-63-6E-2F".split("-")) + o)
        }, null
    }, zt = function () {
        if (pt) {
            if (ft.img !== O.value)return !0;
            if (ft.color !== mt)return !0;
            if (ft.gender !== gt)return !0;
            for (var t = 0; 8 > t; t++)if (!(ft.dec[t] === A[t].value || (/^能\s*$/.test(ft.dec[t]) || /^会\s*$/.test(ft.dec[t]) || /^\s*$/.test(ft.dec[t])) && (/^能\s*$/.test(A[t].value) || /^会\s*$/.test(A[t].value) || /^\s*$/.test(A[t].value))))return !0;
            return (ft.dec[8] === A[8].value || (/^还能\s*$/.test(ft.dec[8]) || /^还会\s*$/.test(ft.dec[8]) || /^\s*$/.test(ft.dec[8])) && (/^还能\s*$/.test(A[8].value) || /^还会\s*$/.test(A[8].value) || /^\s*$/.test(A[8].value))) && (ft.dec[9] === A[9].value || /^\s*$/.test(ft.dec[9]) && /^\s*$/.test(A[9].value)) ? !1 : !0
        }
        return !1
    }, Yt = function () {
        for (var t = 0; 8 > t; t++)/^能\s*$/.test(A[t].value) || /^会\s*$/.test(A[t].value) ? Dt(A[t], "default") : Rt(A[t], "default");
        /^还能\s*$/.test(A[8].value) || /^还会\s*$/.test(A[8].value) ? Dt(A[8], "default") : Rt(A[8], "default");
        for (var t = 0; 9 > t; t++)if (A[t].value.length > 18)return Dt(tt, "error"), Rt(M, "update"), Dt(N, "disabled"), Rt(X, "gogogo"), !1;
        return A[9].value.length > 13 ? (Dt(tt, "error"), Rt(M, "update"), Dt(N, "disabled"), Rt(X, "gogogo"), !1) : (Rt(tt, "error"), O.value ? (Dt(M, "update"), Rt(N, "disabled"), zt() ? Dt(X, "gogogo") : Rt(X, "gogogo"), !0) : (Rt(M, "update"), Dt(N, "disabled"), Rt(X, "gogogo"), !1))
    }, Jt = function (t) {
        H.src = t, Rt($, "hidden"), Rt(X, "gogogo"), pt = !0
    }, Wt = function (t) {
        var e, o;
        if (Dt(F, "hidden"), Rt(dt, "start"), 0 === t.code)e = t.data.weixinUrl, o = "http://service.weibo.com/share/share.php?appkey=4126106794&title=" + encodeURIComponent("#漂亮得不像实力派# " + encodeURIComponent(t.data.weiboUrl)) + "&pic=" + encodeURIComponent(t.data.image), K.href = t.data.download, Rt(K, "disabled"), z.href = o, z.target = "_blank", Rt(z, "disabled"), W.innerHTML = "", new QRCode(W, {
            text: e,
            width: 120,
            height: 120,
            correctLevel: QRCode.CorrectLevel.L
        }), J.onclick = function (t) {
            Mt(Y, "show") ? Rt(Y, "show") : Dt(Y, "show"), t.stopPropagation()
        }, Rt(J, "disabled"), Jt(t.data.image); else {
            if (1001 === t.errInfo.code)return void(location.href = "http://piaoliang.smartisan.com/");
            alert(t.errInfo.msg), Rt(N, "hidden")
        }
    }, jt = function () {
        var t = [], e = Yt();
        if (e) {
            Rt(F, "hidden"), Dt(dt, "start"), Rt(X, "gogogo"), Dt(N, "hidden"), ft.img = O.value, ft.gender = gt, ft.style = D.checked ? 1 : 2;
            for (var o = 0; 7 > o; o++)if (j[o].checked) {
                ft.color = o + 1;
                break
            }
            for (var o = 0; 8 > o; o++)t[o] = /^能\s*$/.test(A[o].value) || /^会\s*$/.test(A[o].value) ? "" : A[o].value;
            t[8] = /^还能\s*$/.test(A[8].value) || /^还会\s*$/.test(A[8].value) ? "" : A[8].value, t[9] = A[9].value;
            for (var o = 0; 10 > o; o++)ft.dec[o] = t[o];
            console.log(ft.dec);
            var n, a = new XMLHttpRequest;
            n = "style=" + ft.style + "&source=" + ft.source + "&word[]=" + encodeURIComponent(ft.dec[0]) + "&word[]=" + encodeURIComponent(ft.dec[1]) + "&word[]=" + encodeURIComponent(ft.dec[2]) + "&word[]=" + encodeURIComponent(ft.dec[3]) + "&word[]=" + encodeURIComponent(ft.dec[4]) + "&word[]=" + encodeURIComponent(ft.dec[5]) + "&word[]=" + encodeURIComponent(ft.dec[6]) + "&word[]=" + encodeURIComponent(ft.dec[7]) + "&word[]=" + encodeURIComponent(ft.dec[8]) + "&identity=" + encodeURIComponent(ft.dec[9]) + "&gender=" + ft.gender + "&color=" + ft.color + "&image=" + encodeURIComponent(ft.img), a.onload = function () {
                var t = JSON.parse(a.responseText);
                Wt(t)
            }, a.open("post", "/stpro/info", !0), a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.send(n)
        }
    }, qt = function (t) {
        for (var e, o, n = [], e = 0; 7 > e; e++)if (j[e].checked) {
            o = e + 1;
            break
        }
        for (e = 0; 8 > e; e++)n[e] = /^能\s*$/.test(A[e].value) || /^会\s*$/.test(A[e].value) || /^\s*$/.test(A[e].value) ? "" : A[e].value;
        n[8] = /^还能\s*$/.test(A[8].value) || /^还会\s*$/.test(A[8].value) || /^\s*$/.test(A[8].value) ? "" : A[8].value, n[9] = /^\s*$/.test(A[9].value) ? "" : A[9].value, m = new Image, m.src = "/stpro/getMask?color=" + o + "&word[]=" + encodeURIComponent(n[0]) + "&word[]=" + encodeURIComponent(n[1]) + "&word[]=" + encodeURIComponent(n[2]) + "&word[]=" + encodeURIComponent(n[3]) + "&word[]=" + encodeURIComponent(n[4]) + "&word[]=" + encodeURIComponent(n[5]) + "&word[]=" + encodeURIComponent(n[6]) + "&word[]=" + encodeURIComponent(n[7]) + "&word[]=" + encodeURIComponent(n[8]) + "&gender=" + gt + "&identity=" + encodeURIComponent(n[9]), m.onload = t
    }, Vt = function () {
        if (d !== h) {
            var t = ht / 236 * (h - d) + d, e = t * c.width, m = t * c.height, f = 244 - (244 - a) * m / n, p = 267 - (267 - r) * e / o;
            if (nt.style.width = ht + "px", rt.style.left = ht - 16 + "px", i > e || s > m) {
                var v = e / m, w = i / s;
                w > v ? (e = i, m = Math.round(i / v)) : (m = s, e = Math.round(s * v)), f > l ? f = l : l + s - m > f && (f = l + s - m), p > u ? p = u : u + i - e > p && (p = u + i - e)
            }
            o = Math.round(e), n = Math.round(m), f > l ? f = l : l + s - n > f && (f = l + s - n), p > u ? p = u : u + i - o > p && (p = u + i - o), r = Math.round(p), a = Math.round(f), T.width = o, T.height = n, Et.drawImage(g, 0, 0, o, n), b.width = 534, b.height = 489, bt.drawImage(T, r, a), Ut()
        }
    }, te = function () {
        f.onclick = function () {
            Rt(v, "on"), Rt(Y, "show"), Rt(q, "on")
        }, p.onclick = function (t) {
            Mt(v, "on") ? Rt(v, "on") : Dt(v, "on"), t.stopPropagation()
        }, y.onchange = $t, B.onclick = Pt, b.onmousedown = function (t) {
            Ct = {x: t.clientX, y: t.clientY}
        }, b.onmousemove = function (t) {
            if (Ct.x || Ct.y) {
                var e = t.clientX - Ct.x, o = t.clientY - Ct.y;
                Ct = {x: t.clientX, y: t.clientY}, Xt(e, o)
            }
        }, b.onmouseup = function (t) {
            Ct = {}
        }, b.onmousewheel = Gt, b.addEventListener("DOMMouseScroll", Gt, !1), b.wheel = Gt, k.onclick = Ft, rt.onmousedown = function (t) {
            ct = t.clientX, t.stopPropagation()
        }, ot.onmousemove = function (t) {
            if (ct && !(Math.abs(f.scrollWidth - 2 * t.pageX) > 244)) {
                var e = t.clientX - ct;
                ct = t.clientX, ht = Math.min(ht + e, 236), ht = Math.max(ht, 0), Vt()
            }
        }, ot.onmouseleave = function (t) {
            ct = 0
        }, ot.onmouseup = function (t) {
            ct = 0
        }, it.onclick = function () {
            ht -= 10, ht = Math.max(ht, 0), Vt()
        }, st.onclick = function () {
            ht += 10, ht = Math.min(ht, 236), Vt()
        }, D.onclick = function () {
            for (var t = 0; 9 > t; t++)A[t].value = vt[0][t], wt[t] = vt[0][t];
            Yt()
        }, R.onclick = function () {
            for (var t = 0; 9 > t; t++)A[t].value = vt[1][t], wt[t] = vt[1][t];
            Yt()
        }, Z.onclick = function (t) {
            Mt(q, "on") ? Rt(q, "on") : Dt(q, "on"), t.stopPropagation()
        }, P.onclick = function (t) {
            Z.innerHTML = "他", gt = 1, Yt(), setTimeout(function () {
                Rt(q, "on")
            }, 200), t.stopPropagation()
        }, x.onclick = function (t) {
            Z.innerHTML = "她", gt = 2, Yt(), setTimeout(function () {
                Rt(q, "on")
            }, 200), t.stopPropagation()
        }, U.onclick = function (t) {
            Z.innerHTML = "它", gt = 3, Yt(), setTimeout(function () {
                Rt(q, "on")
            }, 200), t.stopPropagation()
        }, N.onclick = jt, Q.onclick = jt, Q.onmouseout = Kt(), lt.onclick = function () {
            c = Bt.image, mt = Bt.color, o = Bt.fitWidth, n = Bt.fitHeight, a = Bt.fitTop, r = Bt.fitLeft, d = Bt.minZoom, h = Bt.maxZoom, ht = Bt.zoomPos, g = Bt.thumbnail, nt.style.width = ht + "px", rt.style.left = ht - 16 + "px", et.style.opacity = d === h ? .3 : 1, T.width = o, T.height = n, Et.drawImage(g, 0, 0, o, n), b.width = 534, b.height = 489, bt.drawImage(T, r, a), Rt(C, "hidden"), Rt(E, "hidden"), qt(function () {
                Ut(), Dt(E, "loaded")
            })
        }, G.onclick = function () {
            Rt(X, "gogogo")
        }, at.onmousedown = function (t) {
            ht = Math.max(0, t.offsetX - 8), Vt()
        };
        for (var t = 0; 10 > t; t++)!function (t) {
            A[t].onkeydown = function (e) {
                yt[t] = e.keyCode, clearTimeout(_t[t]), _t[t] = setTimeout(Yt, 500)
            }, A[t].onblur = function (e) {
                8 > t && /^\s*$/.test(this.value) ? (this.value = D.checked ? "能" : "会", vt[0][t] = "能", vt[1][t] = "会") : 8 === t && /^\s*$/.test(this.value) && (this.value = D.checked ? "还能" : "还会", vt[0][t] = "还能", vt[1][t] = "还会"), Yt()
            }, A[t].onkeyup = function (e) {
                return 229 === yt[t] && 32 !== e.keyCode ? void clearTimeout(_t[t]) : (D.checked ? (8 > t ? "能" !== wt[t] && "" !== wt[t] && "" === this.value && (this.value = "能") : 8 === t && "还能" !== wt[t] && "还" !== wt[t] && "" !== wt[t] && "" === this.value && (this.value = "还能"), vt[0][t] = this.value, wt[t] = this.value, "能" === this.value.substr(0, 1) && 8 > t ? vt[1][t] = "会" + this.value.substr(1) : 8 > t ? vt[1][t] = this.value : "还能" === this.value.substr(0, 2) && 8 === t ? vt[1][t] = "还会" + this.value.substr(2) : 8 === t && (vt[1][t] = this.value)) : (8 > t ? "会" !== wt[t] && "" !== wt[t] && "" === this.value && (this.value = "会") : 8 === t && "还会" !== wt[t] && "还" !== wt[t] && "" !== wt[t] && "" === this.value && (this.value = "还会"), vt[1][t] = this.value, wt[t] = this.value, "会" === this.value.substr(0, 1) && 8 > t ? vt[0][t] = "能" + this.value.substr(1) : 8 > t ? vt[0][t] = this.value : "还会" === this.value.substr(0, 2) && 8 === t ? vt[0][t] = "还能" + this.value.substr(2) : 8 === t && (vt[0][t] = this.value)), void Yt())
            }, A[t].onpaste = function () {
                D.checked ? (vt[0][t] = this.value, "能" === this.value.substr(0, 1) && 8 > t ? vt[1][t] = "会" + this.value.substr(1) : 8 > t ? vt[1][t] = "会" + this.value : "还能" === this.value.substr(0, 2) && 8 === t ? vt[1][t] = "还会" + this.value.substr(2) : 8 === t && (vt[1][t] = "还会" + this.value)) : (vt[1][t] = this.value, "会" === this.value.substr(0, 1) && 8 > t ? vt[0][t] = "能" + this.value.substr(1) : 8 > t ? vt[0][t] = "能" + this.value : "还会" === this.value.substr(0, 2) && 8 === t ? vt[0][t] = "还能" + this.value.substr(2) : 8 === t && (vt[0][t] = "还能" + this.value)), Yt()
            }
        }(t);
        for (var t = 0; 7 > t; t++)!function (t) {
            j[t].onclick = function () {
                qt(function () {
                    xt()
                })
            }
        }(t)
    }, ee = function () {
        te(), At && (ut.src = ut.src.substr(0, ut.src.length - 3) + "gif"), y.style.top = ""
    };
    t.init = ee, t.previousCrop = Bt
}(window), init();
var QRCode;
!function () {
    function t(t) {
        this.mode = u.MODE_8BIT_BYTE, this.data = t, this.parsedData = [];
        for (var e = 0, o = this.data.length; o > e; e++) {
            var n = [], a = this.data.charCodeAt(e);
            a > 65536 ? (n[0] = 240 | (1835008 & a) >>> 18, n[1] = 128 | (258048 & a) >>> 12, n[2] = 128 | (4032 & a) >>> 6, n[3] = 128 | 63 & a) : a > 2048 ? (n[0] = 224 | (61440 & a) >>> 12, n[1] = 128 | (4032 & a) >>> 6, n[2] = 128 | 63 & a) : a > 128 ? (n[0] = 192 | (1984 & a) >>> 6, n[1] = 128 | 63 & a) : n[0] = a, this.parsedData.push(n)
        }
        this.parsedData = Array.prototype.concat.apply([], this.parsedData), this.parsedData.length != this.data.length && (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239))
    }

    function e(t, e) {
        this.typeNumber = t, this.errorCorrectLevel = e, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = []
    }

    function o(t, e) {
        if (void 0 == t.length)throw new Error(t.length + "/" + e);
        for (var o = 0; o < t.length && 0 == t[o];)o++;
        this.num = new Array(t.length - o + e);
        for (var n = 0; n < t.length - o; n++)this.num[n] = t[n + o]
    }

    function n(t, e) {
        this.totalCount = t, this.dataCount = e
    }

    function a() {
        this.buffer = [], this.length = 0
    }

    function r() {
        return "undefined" != typeof CanvasRenderingContext2D
    }

    function i() {
        var t = !1, e = navigator.userAgent;
        if (/android/i.test(e)) {
            t = !0;
            var o = e.toString().match(/android ([0-9]\.[0-9])/i);
            o && o[1] && (t = parseFloat(o[1]))
        }
        return t
    }

    function s(t, e) {
        for (var o = 1, n = l(t), a = 0, r = f.length; r >= a; a++) {
            var i = 0;
            switch (e) {
                case d.L:
                    i = f[a][0];
                    break;
                case d.M:
                    i = f[a][1];
                    break;
                case d.Q:
                    i = f[a][2];
                    break;
                case d.H:
                    i = f[a][3]
            }
            if (i >= n)break;
            o++
        }
        if (o > f.length)throw new Error("Too long data");
        return o
    }

    function l(t) {
        var e = encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
        return e.length + (e.length != t ? 3 : 0)
    }

    t.prototype = {
        getLength: function (t) {
            return this.parsedData.length
        }, write: function (t) {
            for (var e = 0, o = this.parsedData.length; o > e; e++)t.put(this.parsedData[e], 8)
        }
    }, e.prototype = {
        addData: function (e) {
            var o = new t(e);
            this.dataList.push(o), this.dataCache = null
        }, isDark: function (t, e) {
            if (0 > t || this.moduleCount <= t || 0 > e || this.moduleCount <= e)throw new Error(t + "," + e);
            return this.modules[t][e]
        }, getModuleCount: function () {
            return this.moduleCount
        }, make: function () {
            this.makeImpl(!1, this.getBestMaskPattern())
        }, makeImpl: function (t, o) {
            this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
            for (var n = 0; n < this.moduleCount; n++) {
                this.modules[n] = new Array(this.moduleCount);
                for (var a = 0; a < this.moduleCount; a++)this.modules[n][a] = null
            }
            this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(t, o), this.typeNumber >= 7 && this.setupTypeNumber(t), null == this.dataCache && (this.dataCache = e.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, o)
        }, setupPositionProbePattern: function (t, e) {
            for (var o = -1; 7 >= o; o++)if (!(-1 >= t + o || this.moduleCount <= t + o))for (var n = -1; 7 >= n; n++)-1 >= e + n || this.moduleCount <= e + n || (this.modules[t + o][e + n] = o >= 0 && 6 >= o && (0 == n || 6 == n) || n >= 0 && 6 >= n && (0 == o || 6 == o) || o >= 2 && 4 >= o && n >= 2 && 4 >= n ? !0 : !1)
        }, getBestMaskPattern: function () {
            for (var t = 0, e = 0, o = 0; 8 > o; o++) {
                this.makeImpl(!0, o);
                var n = c.getLostPoint(this);
                (0 == o || t > n) && (t = n, e = o)
            }
            return e
        }, createMovieClip: function (t, e, o) {
            var n = t.createEmptyMovieClip(e, o), a = 1;
            this.make();
            for (var r = 0; r < this.modules.length; r++)for (var i = r * a, s = 0; s < this.modules[r].length; s++) {
                var l = s * a, u = this.modules[r][s];
                u && (n.beginFill(0, 100), n.moveTo(l, i), n.lineTo(l + a, i), n.lineTo(l + a, i + a), n.lineTo(l, i + a), n.endFill())
            }
            return n
        }, setupTimingPattern: function () {
            for (var t = 8; t < this.moduleCount - 8; t++)null == this.modules[t][6] && (this.modules[t][6] = t % 2 == 0);
            for (var e = 8; e < this.moduleCount - 8; e++)null == this.modules[6][e] && (this.modules[6][e] = e % 2 == 0)
        }, setupPositionAdjustPattern: function () {
            for (var t = c.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++)for (var o = 0; o < t.length; o++) {
                var n = t[e], a = t[o];
                if (null == this.modules[n][a])for (var r = -2; 2 >= r; r++)for (var i = -2; 2 >= i; i++)this.modules[n + r][a + i] = -2 == r || 2 == r || -2 == i || 2 == i || 0 == r && 0 == i ? !0 : !1
            }
        }, setupTypeNumber: function (t) {
            for (var e = c.getBCHTypeNumber(this.typeNumber), o = 0; 18 > o; o++) {
                var n = !t && 1 == (e >> o & 1);
                this.modules[Math.floor(o / 3)][o % 3 + this.moduleCount - 8 - 3] = n
            }
            for (var o = 0; 18 > o; o++) {
                var n = !t && 1 == (e >> o & 1);
                this.modules[o % 3 + this.moduleCount - 8 - 3][Math.floor(o / 3)] = n
            }
        }, setupTypeInfo: function (t, e) {
            for (var o = this.errorCorrectLevel << 3 | e, n = c.getBCHTypeInfo(o), a = 0; 15 > a; a++) {
                var r = !t && 1 == (n >> a & 1);
                6 > a ? this.modules[a][8] = r : 8 > a ? this.modules[a + 1][8] = r : this.modules[this.moduleCount - 15 + a][8] = r
            }
            for (var a = 0; 15 > a; a++) {
                var r = !t && 1 == (n >> a & 1);
                8 > a ? this.modules[8][this.moduleCount - a - 1] = r : 9 > a ? this.modules[8][15 - a - 1 + 1] = r : this.modules[8][15 - a - 1] = r
            }
            this.modules[this.moduleCount - 8][8] = !t
        }, mapData: function (t, e) {
            for (var o = -1, n = this.moduleCount - 1, a = 7, r = 0, i = this.moduleCount - 1; i > 0; i -= 2)for (6 == i && i--; ;) {
                for (var s = 0; 2 > s; s++)if (null == this.modules[n][i - s]) {
                    var l = !1;
                    r < t.length && (l = 1 == (t[r] >>> a & 1));
                    var u = c.getMask(e, n, i - s);
                    u && (l = !l), this.modules[n][i - s] = l, a--, -1 == a && (r++, a = 7)
                }
                if (n += o, 0 > n || this.moduleCount <= n) {
                    n -= o, o = -o;
                    break
                }
            }
        }
    }, e.PAD0 = 236, e.PAD1 = 17, e.createData = function (t, o, r) {
        for (var i = n.getRSBlocks(t, o), s = new a, l = 0; l < r.length; l++) {
            var u = r[l];
            s.put(u.mode, 4), s.put(u.getLength(), c.getLengthInBits(u.mode, t)), u.write(s)
        }
        for (var d = 0, l = 0; l < i.length; l++)d += i[l].dataCount;
        if (s.getLengthInBits() > 8 * d)throw new Error("code length overflow. (" + s.getLengthInBits() + ">" + 8 * d + ")");
        for (s.getLengthInBits() + 4 <= 8 * d && s.put(0, 4); s.getLengthInBits() % 8 != 0;)s.putBit(!1);
        for (; ;) {
            if (s.getLengthInBits() >= 8 * d)break;
            if (s.put(e.PAD0, 8), s.getLengthInBits() >= 8 * d)break;
            s.put(e.PAD1, 8)
        }
        return e.createBytes(s, i)
    }, e.createBytes = function (t, e) {
        for (var n = 0, a = 0, r = 0, i = new Array(e.length), s = new Array(e.length), l = 0; l < e.length; l++) {
            var u = e[l].dataCount, d = e[l].totalCount - u;
            a = Math.max(a, u), r = Math.max(r, d), i[l] = new Array(u);
            for (var h = 0; h < i[l].length; h++)i[l][h] = 255 & t.buffer[h + n];
            n += u;
            var g = c.getErrorCorrectPolynomial(d), m = new o(i[l], g.getLength() - 1), f = m.mod(g);
            s[l] = new Array(g.getLength() - 1);
            for (var h = 0; h < s[l].length; h++) {
                var p = h + f.getLength() - s[l].length;
                s[l][h] = p >= 0 ? f.get(p) : 0
            }
        }
        for (var v = 0, h = 0; h < e.length; h++)v += e[h].totalCount;
        for (var w = new Array(v), y = 0, h = 0; a > h; h++)for (var l = 0; l < e.length; l++)h < i[l].length && (w[y++] = i[l][h]);
        for (var h = 0; r > h; h++)for (var l = 0; l < e.length; l++)h < s[l].length && (w[y++] = s[l][h]);
        return w
    };
    for (var u = {MODE_NUMBER: 1, MODE_ALPHA_NUM: 2, MODE_8BIT_BYTE: 4, MODE_KANJI: 8}, d = {
        L: 1,
        M: 0,
        Q: 3,
        H: 2
    }, h = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7
    }, c = {
        PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
        G15: 1335,
        G18: 7973,
        G15_MASK: 21522,
        getBCHTypeInfo: function (t) {
            for (var e = t << 10; c.getBCHDigit(e) - c.getBCHDigit(c.G15) >= 0;)e ^= c.G15 << c.getBCHDigit(e) - c.getBCHDigit(c.G15);
            return (t << 10 | e) ^ c.G15_MASK
        },
        getBCHTypeNumber: function (t) {
            for (var e = t << 12; c.getBCHDigit(e) - c.getBCHDigit(c.G18) >= 0;)e ^= c.G18 << c.getBCHDigit(e) - c.getBCHDigit(c.G18);
            return t << 12 | e
        },
        getBCHDigit: function (t) {
            for (var e = 0; 0 != t;)e++, t >>>= 1;
            return e
        },
        getPatternPosition: function (t) {
            return c.PATTERN_POSITION_TABLE[t - 1]
        },
        getMask: function (t, e, o) {
            switch (t) {
                case h.PATTERN000:
                    return (e + o) % 2 == 0;
                case h.PATTERN001:
                    return e % 2 == 0;
                case h.PATTERN010:
                    return o % 3 == 0;
                case h.PATTERN011:
                    return (e + o) % 3 == 0;
                case h.PATTERN100:
                    return (Math.floor(e / 2) + Math.floor(o / 3)) % 2 == 0;
                case h.PATTERN101:
                    return e * o % 2 + e * o % 3 == 0;
                case h.PATTERN110:
                    return (e * o % 2 + e * o % 3) % 2 == 0;
                case h.PATTERN111:
                    return (e * o % 3 + (e + o) % 2) % 2 == 0;
                default:
                    throw new Error("bad maskPattern:" + t)
            }
        },
        getErrorCorrectPolynomial: function (t) {
            for (var e = new o([1], 0), n = 0; t > n; n++)e = e.multiply(new o([1, g.gexp(n)], 0));
            return e
        },
        getLengthInBits: function (t, e) {
            if (e >= 1 && 10 > e)switch (t) {
                case u.MODE_NUMBER:
                    return 10;
                case u.MODE_ALPHA_NUM:
                    return 9;
                case u.MODE_8BIT_BYTE:
                    return 8;
                case u.MODE_KANJI:
                    return 8;
                default:
                    throw new Error("mode:" + t)
            } else if (27 > e)switch (t) {
                case u.MODE_NUMBER:
                    return 12;
                case u.MODE_ALPHA_NUM:
                    return 11;
                case u.MODE_8BIT_BYTE:
                    return 16;
                case u.MODE_KANJI:
                    return 10;
                default:
                    throw new Error("mode:" + t)
            } else {
                if (!(41 > e))throw new Error("type:" + e);
                switch (t) {
                    case u.MODE_NUMBER:
                        return 14;
                    case u.MODE_ALPHA_NUM:
                        return 13;
                    case u.MODE_8BIT_BYTE:
                        return 16;
                    case u.MODE_KANJI:
                        return 12;
                    default:
                        throw new Error("mode:" + t)
                }
            }
        },
        getLostPoint: function (t) {
            for (var e = t.getModuleCount(), o = 0, n = 0; e > n; n++)for (var a = 0; e > a; a++) {
                for (var r = 0, i = t.isDark(n, a), s = -1; 1 >= s; s++)if (!(0 > n + s || n + s >= e))for (var l = -1; 1 >= l; l++)0 > a + l || a + l >= e || (0 != s || 0 != l) && i == t.isDark(n + s, a + l) && r++;
                r > 5 && (o += 3 + r - 5)
            }
            for (var n = 0; e - 1 > n; n++)for (var a = 0; e - 1 > a; a++) {
                var u = 0;
                t.isDark(n, a) && u++, t.isDark(n + 1, a) && u++, t.isDark(n, a + 1) && u++, t.isDark(n + 1, a + 1) && u++, (0 == u || 4 == u) && (o += 3)
            }
            for (var n = 0; e > n; n++)for (var a = 0; e - 6 > a; a++)t.isDark(n, a) && !t.isDark(n, a + 1) && t.isDark(n, a + 2) && t.isDark(n, a + 3) && t.isDark(n, a + 4) && !t.isDark(n, a + 5) && t.isDark(n, a + 6) && (o += 40);
            for (var a = 0; e > a; a++)for (var n = 0; e - 6 > n; n++)t.isDark(n, a) && !t.isDark(n + 1, a) && t.isDark(n + 2, a) && t.isDark(n + 3, a) && t.isDark(n + 4, a) && !t.isDark(n + 5, a) && t.isDark(n + 6, a) && (o += 40);
            for (var d = 0, a = 0; e > a; a++)for (var n = 0; e > n; n++)t.isDark(n, a) && d++;
            var h = Math.abs(100 * d / e / e - 50) / 5;
            return o += 10 * h
        }
    }, g = {
        glog: function (t) {
            if (1 > t)throw new Error("glog(" + t + ")");
            return g.LOG_TABLE[t]
        }, gexp: function (t) {
            for (; 0 > t;)t += 255;
            for (; t >= 256;)t -= 255;
            return g.EXP_TABLE[t]
        }, EXP_TABLE: new Array(256), LOG_TABLE: new Array(256)
    }, m = 0; 8 > m; m++)g.EXP_TABLE[m] = 1 << m;
    for (var m = 8; 256 > m; m++)g.EXP_TABLE[m] = g.EXP_TABLE[m - 4] ^ g.EXP_TABLE[m - 5] ^ g.EXP_TABLE[m - 6] ^ g.EXP_TABLE[m - 8];
    for (var m = 0; 255 > m; m++)g.LOG_TABLE[g.EXP_TABLE[m]] = m;
    o.prototype = {
        get: function (t) {
            return this.num[t]
        }, getLength: function () {
            return this.num.length
        }, multiply: function (t) {
            for (var e = new Array(this.getLength() + t.getLength() - 1), n = 0; n < this.getLength(); n++)for (var a = 0; a < t.getLength(); a++)e[n + a] ^= g.gexp(g.glog(this.get(n)) + g.glog(t.get(a)));
            return new o(e, 0)
        }, mod: function (t) {
            if (this.getLength() - t.getLength() < 0)return this;
            for (var e = g.glog(this.get(0)) - g.glog(t.get(0)), n = new Array(this.getLength()), a = 0; a < this.getLength(); a++)n[a] = this.get(a);
            for (var a = 0; a < t.getLength(); a++)n[a] ^= g.gexp(g.glog(t.get(a)) + e);
            return new o(n, 0).mod(t)
        }
    }, n.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]], n.getRSBlocks = function (t, e) {
        var o = n.getRsBlockTable(t, e);
        if (void 0 == o)throw new Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + e);
        for (var a = o.length / 3, r = [], i = 0; a > i; i++)for (var s = o[3 * i + 0], l = o[3 * i + 1], u = o[3 * i + 2], d = 0; s > d; d++)r.push(new n(l, u));
        return r
    }, n.getRsBlockTable = function (t, e) {
        switch (e) {
            case d.L:
                return n.RS_BLOCK_TABLE[4 * (t - 1) + 0];
            case d.M:
                return n.RS_BLOCK_TABLE[4 * (t - 1) + 1];
            case d.Q:
                return n.RS_BLOCK_TABLE[4 * (t - 1) + 2];
            case d.H:
                return n.RS_BLOCK_TABLE[4 * (t - 1) + 3];
            default:
                return void 0
        }
    }, a.prototype = {
        get: function (t) {
            var e = Math.floor(t / 8);
            return 1 == (this.buffer[e] >>> 7 - t % 8 & 1)
        }, put: function (t, e) {
            for (var o = 0; e > o; o++)this.putBit(1 == (t >>> e - o - 1 & 1))
        }, getLengthInBits: function () {
            return this.length
        }, putBit: function (t) {
            var e = Math.floor(this.length / 8);
            this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++
        }
    };
    var f = [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]], p = function () {
        var t = function (t, e) {
            this._el = t, this._htOption = e
        };
        return t.prototype.draw = function (t) {
            function e(t, e) {
                var o = document.createElementNS("http://www.w3.org/2000/svg", t);
                for (var n in e)e.hasOwnProperty(n) && o.setAttribute(n, e[n]);
                return o
            }

            {
                var o = this._htOption, n = this._el, a = t.getModuleCount();
                Math.floor(o.width / a), Math.floor(o.height / a)
            }
            this.clear();
            var r = e("svg", {
                viewBox: "0 0 " + String(a) + " " + String(a),
                width: "100%",
                height: "100%",
                fill: o.colorLight
            });
            r.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"), n.appendChild(r), r.appendChild(e("rect", {
                fill: o.colorLight,
                width: "100%",
                height: "100%"
            })), r.appendChild(e("rect", {fill: o.colorDark, width: "1", height: "1", id: "template"}));
            for (var i = 0; a > i; i++)for (var s = 0; a > s; s++)if (t.isDark(i, s)) {
                var l = e("use", {x: String(s), y: String(i)});
                l.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#template"), r.appendChild(l)
            }
        }, t.prototype.clear = function () {
            for (; this._el.hasChildNodes();)this._el.removeChild(this._el.lastChild);

        }, t
    }(), v = "svg" === document.documentElement.tagName.toLowerCase(), w = v ? p : r() ? function () {
        function t() {
            this._elImage.src = this._elCanvas.toDataURL("image/png"), this._elImage.style.display = "block", this._elCanvas.style.display = "none"
        }

        function e(t, e) {
            var o = this;
            if (o._fFail = e, o._fSuccess = t, null === o._bSupportDataURI) {
                var n = document.createElement("img"), a = function () {
                    o._bSupportDataURI = !1, o._fFail && o._fFail.call(o)
                }, r = function () {
                    o._bSupportDataURI = !0, o._fSuccess && o._fSuccess.call(o)
                };
                return n.onabort = a, n.onerror = a, n.onload = r, void(n.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==")
            }
            o._bSupportDataURI === !0 && o._fSuccess ? o._fSuccess.call(o) : o._bSupportDataURI === !1 && o._fFail && o._fFail.call(o)
        }

        if (this._android && this._android <= 2.1) {
            var o = 1 / window.devicePixelRatio, n = CanvasRenderingContext2D.prototype.drawImage;
            CanvasRenderingContext2D.prototype.drawImage = function (t, e, a, r, i, s, l, u, d) {
                if ("nodeName" in t && /img/i.test(t.nodeName))for (var h = arguments.length - 1; h >= 1; h--)arguments[h] = arguments[h] * o; else"undefined" == typeof u && (arguments[1] *= o, arguments[2] *= o, arguments[3] *= o, arguments[4] *= o);
                n.apply(this, arguments)
            }
        }
        var a = function (t, e) {
            this._bIsPainted = !1, this._android = i(), this._htOption = e, this._elCanvas = document.createElement("canvas"), this._elCanvas.width = e.width, this._elCanvas.height = e.height, t.appendChild(this._elCanvas), this._el = t, this._oContext = this._elCanvas.getContext("2d"), this._bIsPainted = !1, this._elImage = document.createElement("img"), this._elImage.alt = "Scan me!", this._elImage.style.display = "none", this._el.appendChild(this._elImage), this._bSupportDataURI = null
        };
        return a.prototype.draw = function (t) {
            var e = this._elImage, o = this._oContext, n = this._htOption, a = t.getModuleCount(), r = n.width / a, i = n.height / a, s = Math.round(r), l = Math.round(i);
            e.style.display = "none", this.clear();
            for (var u = 0; a > u; u++)for (var d = 0; a > d; d++) {
                var h = t.isDark(u, d), c = d * r, g = u * i;
                o.strokeStyle = h ? n.colorDark : n.colorLight, o.lineWidth = 1, o.fillStyle = h ? n.colorDark : n.colorLight, o.fillRect(c, g, r, i), o.strokeRect(Math.floor(c) + .5, Math.floor(g) + .5, s, l), o.strokeRect(Math.ceil(c) - .5, Math.ceil(g) - .5, s, l)
            }
            this._bIsPainted = !0
        }, a.prototype.makeImage = function () {
            this._bIsPainted && e.call(this, t)
        }, a.prototype.isPainted = function () {
            return this._bIsPainted
        }, a.prototype.clear = function () {
            this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height), this._bIsPainted = !1
        }, a.prototype.round = function (t) {
            return t ? Math.floor(1e3 * t) / 1e3 : t
        }, a
    }() : function () {
        var t = function (t, e) {
            this._el = t, this._htOption = e
        };
        return t.prototype.draw = function (t) {
            for (var e = this._htOption, o = this._el, n = t.getModuleCount(), a = Math.floor(e.width / n), r = Math.floor(e.height / n), i = ['<table style="border:0;border-collapse:collapse;">'], s = 0; n > s; s++) {
                i.push("<tr>");
                for (var l = 0; n > l; l++)i.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + a + "px;height:" + r + "px;background-color:" + (t.isDark(s, l) ? e.colorDark : e.colorLight) + ';"></td>');
                i.push("</tr>")
            }
            i.push("</table>"), o.innerHTML = i.join("");
            var u = o.childNodes[0], d = (e.width - u.offsetWidth) / 2, h = (e.height - u.offsetHeight) / 2;
            d > 0 && h > 0 && (u.style.margin = h + "px " + d + "px")
        }, t.prototype.clear = function () {
            this._el.innerHTML = ""
        }, t
    }();
    QRCode = function (t, e) {
        if (this._htOption = {
                width: 256,
                height: 256,
                typeNumber: 4,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: d.H
            }, "string" == typeof e && (e = {text: e}), e)for (var o in e)this._htOption[o] = e[o];
        "string" == typeof t && (t = document.getElementById(t)), this._htOption.useSVG && (w = p), this._android = i(), this._el = t, this._oQRCode = null, this._oDrawing = new w(this._el, this._htOption), this._htOption.text && this.makeCode(this._htOption.text)
    }, QRCode.prototype.makeCode = function (t) {
        this._oQRCode = new e(s(t, this._htOption.correctLevel), this._htOption.correctLevel), this._oQRCode.addData(t), this._oQRCode.make(), this._el.title = t, this._oDrawing.draw(this._oQRCode), this.makeImage()
    }, QRCode.prototype.makeImage = function () {
        "function" == typeof this._oDrawing.makeImage && (!this._android || this._android >= 3) && this._oDrawing.makeImage()
    }, QRCode.prototype.clear = function () {
        this._oDrawing.clear()
    }, QRCode.CorrectLevel = d
}();