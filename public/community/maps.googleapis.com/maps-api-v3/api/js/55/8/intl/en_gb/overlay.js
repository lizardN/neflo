google.maps.__gjsload__('overlay', function(_) {
    var zE = function(a) {
            this.Ig = a
        },
        xla = function() {},
        AE = function(a) {
            a.Vx = a.Vx || new xla;
            return a.Vx
        },
        yla = function(a) {
            this.Gh = new _.Vm(() => {
                const b = a.Vx;
                if (a.getPanes()) {
                    if (a.getProjection()) {
                        if (!b.nw && a.onAdd) a.onAdd();
                        b.nw = !0;
                        a.draw()
                    }
                } else {
                    if (b.nw)
                        if (a.onRemove) a.onRemove();
                        else a.remove();
                    b.nw = !1
                }
            }, 0)
        },
        zla = function(a, b) {
            const c = AE(a);
            let d = c.xv;
            d || (d = c.xv = new yla(a));
            _.Tb(c.Th || [], _.qk);
            var e = c.mi = c.mi || new _.nha;
            const f = b.__gm;
            e.bindTo("zoom", f);
            e.bindTo("offset", f);
            e.bindTo("center", f, "projectionCenterQ");
            e.bindTo("projection", b);
            e.bindTo("projectionTopLeft", f);
            e = c.NB = c.NB || new zE(e);
            e.bindTo("zoom", f);
            e.bindTo("offset", f);
            e.bindTo("projection", b);
            e.bindTo("projectionTopLeft", f);
            a.bindTo("projection", e, "outProjection");
            a.bindTo("panes", f);
            e = () => _.Wm(d.Gh);
            c.Th = [_.ok(a, "panes_changed", e), _.ok(f, "zoom_changed", e), _.ok(f, "offset_changed", e), _.ok(b, "projection_changed", e), _.ok(f, "projectioncenterq_changed", e)];
            _.Wm(d.Gh);
            b instanceof _.Mk ? (_.wl(b, "Ox"), _.ul(b, 148440)) : b instanceof _.Sl && (_.wl(b, "Oxs"),
                _.ul(b, 181451))
        },
        Ela = function(a) {
            if (a) {
                var b = a.getMap();
                if (Ala(a) !== b && b && b instanceof _.Mk) {
                    const c = b.__gm;
                    c.overlayLayer ? a.__gmop = new Bla(b, a, c.overlayLayer) : c.Jg.then(({
                        oh: d
                    }) => {
                        const e = new Cla(b, d);
                        d.Ei(e);
                        c.overlayLayer = e;
                        Dla(a);
                        Ela(a)
                    })
                }
            }
        },
        Dla = function(a) {
            if (a) {
                var b = a.__gmop;
                b && (a.__gmop = null, b.Ig.unbindAll(), b.Ig.set("panes", null), b.Ig.set("projection", null), b.Kg.sl(b), b.Jg && (b.Jg = !1, b.Ig.onRemove ? b.Ig.onRemove() : b.Ig.remove()))
            }
        },
        Ala = function(a) {
            return (a = a.__gmop) ? a.map : null
        },
        Fla = function(a,
            b) {
            a.Ig.get("projection") != b && (a.Ig.bindTo("panes", a.map.__gm), a.Ig.set("projection", b))
        };
    _.Ja(zE, _.Fk);
    zE.prototype.changed = function(a) {
        "outProjection" != a && (a = !!(this.get("offset") && this.get("projectionTopLeft") && this.get("projection") && _.dj(this.get("zoom"))), a == !this.get("outProjection") && this.set("outProjection", a ? this.Ig : null))
    };
    var BE = {};
    _.Ja(yla, _.Fk);
    BE.Wk = function(a) {
        if (a) {
            var b = a.getMap();
            (AE(a).xB || null) !== b && (b && zla(a, b), AE(a).xB = b)
        }
    };
    BE.sl = function(a) {
        const b = AE(a);
        var c = b.mi;
        c && c.unbindAll();
        (c = b.NB) && c.unbindAll();
        a.unbindAll();
        a.set("panes", null);
        a.set("projection", null);
        b.Th && _.Tb(b.Th, _.qk);
        b.Th = null;
        b.xv && (b.xv.Gh.Dj(), b.xv = null);
        delete AE(a).xB
    };
    var CE = {},
        Bla = class {
            constructor(a, b, c) {
                this.map = a;
                this.Ig = b;
                this.Kg = c;
                this.Jg = !1;
                _.wl(this.map, "Ox");
                _.ul(this.map, 148440);
                c.Wk(this)
            }
            draw() {
                this.Jg || (this.Jg = !0, this.Ig.onAdd && this.Ig.onAdd());
                this.Ig.draw && this.Ig.draw()
            }
        },
        Cla = class {
            constructor(a, b) {
                this.Mg = a;
                this.Kg = b;
                this.Ig = null;
                this.Jg = []
            }
            dispose() {}
            Si(a, b, c, d, e, f, g, h) {
                const l = this.Ig = this.Ig || new _.$B(this.Mg, this.Kg, () => {});
                l.Si(a, b, c, d, e, f, g, h);
                for (const n of this.Jg) Fla(n, l), n.draw()
            }
            Wk(a) {
                this.Jg.push(a);
                this.Ig && Fla(a, this.Ig);
                this.Kg.refresh()
            }
            sl(a) {
                _.Xb(this.Jg,
                    a)
            }
        };
    CE.Wk = Ela;
    CE.sl = Dla;
    _.gk("overlay", {
        Oz: function(a) {
            if (a) {
                (0, BE.sl)(a);
                (0, CE.sl)(a);
                var b = a.getMap();
                b && (b instanceof _.Mk ? (0, CE.Wk)(a) : (0, BE.Wk)(a))
            }
        },
        preventMapHitsFrom: a => {
            _.$v(a, {
                kl: ({
                    event: b
                }) => {
                    _.Ht(b.Lh)
                },
                dk: b => _.Jv(b),
                Ap: b => _.Kv(b),
                Qk: b => _.Kv(b),
                tk: b => _.Lv(b)
            }).Xq(!0)
        },
        preventMapHitsAndGesturesFrom: a => {
            a.addEventListener("click", _.mk);
            a.addEventListener("contextmenu", _.mk);
            a.addEventListener("dblclick", _.mk);
            a.addEventListener("mousedown", _.mk);
            a.addEventListener("mousemove", _.mk);
            a.addEventListener("MSPointerDown",
                _.mk);
            a.addEventListener("pointerdown", _.mk);
            a.addEventListener("touchstart", _.mk);
            a.addEventListener("wheel", _.mk)
        }
    });
});