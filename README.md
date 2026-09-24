# Dillo's Pizza — website

Static HTML5 / CSS3 / vanilla JS. No framework, no ordering, no cart, no pizza builder.

```
index.html  menu.html  catering.html  our-story.html  location.html  contact.html
styles.css  menu.css   script.js      assets/favicon.svg
build/data.py   <- ALL content, prices, hours and image assignments (single source of truth)
build/build.py  <- regenerates every page:  python3 build/build.py
```

Edit `build/data.py`, run the build, upload the root folder to any static host.

## Before launch — owner must confirm

1. **Thursday–Saturday hours** are shown exactly as currently published: `11:00 AM – 12:00 PM`.
   That reads as a one-hour day. It is kept verbatim per the brief. Thu–Sat is deliberately
   left OUT of the Google structured data until the real closing time (likely 12:00 AM) is confirmed.
2. **Specialty pizzas** — the brief says images/prices were already approved in an existing project.
   That project was not supplied. Names are the 9 approved names; descriptions are copied from
   dillospizza.com/menu. **No per-pizza price is shown** because none is confirmed. Swap in the approved
   images via `IMG` keys `sp_*`.
3. **Logo** — a type-only wordmark is used as a placeholder. Drop the real logo into `LOGO` in build.py.
4. **Deal size tiers** (e.g. Try Double 2×12" $29.99) are copied from dillospizza.com/menu. The "From"
   prices match the brief exactly.

## Photography

All photos are free-licence Pexels/Unsplash images served from their CDNs with responsive `srcset`
(AVIF/WebP with JPG fallback, up to 3000px on the hero). For production, download the originals into
`/assets/` and self-host.

Stock photography cannot guarantee exact piece counts or exact specialty toppings. Every image is tagged:
**exact** (shows the named product), **close** (right food; count/toppings approximate), **stand-in**
(best honest option — replace). Deal cards are composed from separate photos so each card visibly
contains exactly what the deal includes (e.g. Family Combo = 2 pizzas + wings + 2L bottle).

**Recommendation:** a one-day shoot of Dillo's own food (≈45 shots) replaces every close/stand-in image
and makes the chicken/wing counts literal.

| key | match | subject | source |
|---|---|---|---|
| `hero1` | exact | Loaded hand-tossed pizza with pepperoni, Italian sausage, green peppers, onions and melted mozzarella | Pexels 26575499 |
| `hero2` | exact | Pizzas and a basket of chicken wings shared across a restaurant table | Pexels 19786209 |
| `hero3` | exact | Pepperoni pizza with a golden hand-tossed crust on a wooden board, fresh dough behind it | Unsplash photo-1564128442383-9201fcc740eb |
| `dough` | exact | Fresh pizza dough balls resting on a floured surface | Pexels 7368023 |
| `flatlay` | exact | Flour, olive oil, fresh tomatoes and peppercorns around a wooden pizza board | Unsplash photo-1690983322070-22861e13ce47 |
| `ingredients` | exact | Board of sliced pepperoni, salami, green peppers, mushrooms and shredded mozzarella | Pexels 5627895 |
| `handmade` | exact | Pizza maker stretching fresh dough by hand on a floured counter | Pexels 27564591 |
| `flavour` | exact | Slice of pepperoni pizza lifted with a long mozzarella pull | Pexels 31587831 |
| `building` | exact | Pizza maker topping a hand-tossed pizza with pepperoni and fresh ingredients | Pexels 5907833 |
| `together` | exact | Friends sharing pizza around a table in a warm, casual restaurant | Pexels 36729762 |
| `together2` | exact | Group of friends laughing and sharing pizza | Pexels 7886606 |
| `sig_pizza` | exact | Hand-tossed pizza loaded with salami, pepperoni, peppers and mozzarella | Pexels 26575536 |
| `cat_pizza` | exact | Pepperoni, green pepper and olive pizza | Pexels 11653776 |
| `cat_chicken` | exact | Crispy golden fried chicken pieces | Pexels 9872916 |
| `cat_wings` | exact | Plate of sauced chicken wings with dips | Pexels 30224598 |
| `cat_poutine` | exact | Bowl of poutine - fries, cheese curds and gravy | Pexels 15159417 |
| `cat_wraps` | exact | Chicken shawarma wrap cut in half showing the filling | Unsplash photo-1719282431723-9d0f4370d4bc |
| `cat_salads` | exact | Greek salad with feta, olives, tomato and cucumber | Pexels 3026013 |
| `cat_sides` | exact | Fried mozzarella sticks with dipping sauce | Pexels 29872923 |
| `cat_drinks` | exact | Chilled 355 ml pop cans | Pexels 6920721 |
| `sp_tropical` | close | Loaded pizza with pineapple, banana peppers, green peppers and cheese | Unsplash photo-1681567604770-0dc826c870ae |
| `sp_cbr` | close | Chicken pizza finished with a creamy ranch drizzle | Pexels 33458049 |
| `sp_bbq` | close | BBQ chicken pizza with onions, mushrooms and peppers | Pexels 11485225 |
| `sp_shawarma` | close | Chicken pizza with onions, tomato and peppers | Pexels 5639547 |
| `sp_margarita` | exact | Margarita pizza with fresh tomato slices and basil | Pexels 31450842 |
| `sp_spinach` | exact | Spinach and feta pizza with tomato sauce and mozzarella | Pexels 7362681 |
| `sp_hawaiian` | exact | Hawaiian pizza with ham and pineapple | Pexels 38976313 |
| `sp_dblpep` | exact | Pizza loaded with pepperoni | Unsplash photo-1564128442383-9201fcc740eb |
| `sp_deluxe` | close | Deluxe pizza with pepperoni, green pepper, onion and mushroom | Pexels 11653776 |
| `byo` | exact | Hand-tossed pizza being topped with fresh ingredients | Pexels 5907833 |
| `ch4` | close | A few pieces of crispy fried chicken on a white plate | Unsplash photo-1586793783658-261cddf883ef |
| `ch6` | close | Crispy fried chicken pieces on a leaf-lined plate | Unsplash photo-1569058242253-92a9c755a0ec |
| `ch8` | close | Pile of crispy golden fried chicken | Pexels 9872916 |
| `ch10` | close | Fried chicken served on brown paper | Unsplash photo-1426869981800-95ebf51ce900 |
| `ch12` | close | Large serving of crispy fried chicken | Unsplash photo-1594254916028-742dedb72062 |
| `w12` | close | Plate of sauced chicken wings with dips | Pexels 30224598 |
| `w24` | close | Tray of chicken wings with ranch dip | Pexels 5724555 |
| `w36` | close | Heaped bowl of crispy chicken wings | Unsplash photo-1608039755401-742074f0548d |
| `w48` | close | Large party tray of chicken wings | Pexels 106343 |
| `s_pickles` | close | Battered fried pickle spears with ranch dip | Unsplash photo-1598679253597-adfd54b86fba |
| `s_strips` | exact | Crispy chicken strips and fries in a takeout box | Pexels 33569113 |
| `s_garlic` | exact | Garlic bread sticks with dipping sauces | Pexels 14841918 |
| `s_poutine` | exact | Classic poutine with cheese curds and gravy | Pexels 15159417 |
| `s_cheesy` | exact | Cheesy bread baked with melted mozzarella | Pexels 30869077 |
| `s_stuffed` | close | Golden stuffed cheesy bread sticks with dip | Pexels 13062441 |
| `s_calzone` | exact | Large golden baked calzone | Pexels 17549580 |
| `s_mozz` | exact | Fried mozzarella sticks with dipping sauce | Pexels 29872923 |
| `s_battered` | close | Crispy battered fries | Pexels 5652256 |
| `s_skinon` | exact | Skin-on fries with the potato skin left on | Pexels 2962450 |
| `s_spring` | exact | Crispy fried spring rolls with dipping sauce | Pexels 16976637 |
| `s_samosa` | exact | Crispy fried samosas | Pexels 37153389 |
| `s_sandwich` | exact | Crispy chicken sandwich | Pexels 8130750 |
| `s_snack` | close | Snack-size chicken wrap on a plate | Pexels 9624298 |
| `s_gravy` | stand-in | Rich brown gravy being poured | Unsplash photo-1606307305298-18db03129908 |
| `s_dips` | exact | Three dipping sauces in small ramekins | Pexels 32972548 |
| `wr_donair` | exact | Beef donair wrap with shaved beef, tomato and onion | Unsplash photo-1699728088614-7d1d4277414b |
| `wr_shawarma` | exact | Chicken shawarma wrap with vegetables | Unsplash photo-1719282431565-3b30bb7d2658 |
| `wr_caesar` | close | Chicken Caesar wrap with romaine, cut in half | Pexels 10027451 |
| `sal_greek` | exact | Greek salad with feta, olives, tomato and cucumber | Pexels 3026013 |
| `sal_caesar` | exact | Caesar salad with romaine, croutons and parmesan | Pexels 33674388 |
| `pt_donair` | stand-in | Loaded fries and cheese topped with seasoned beef | Pexels 28525208 |
| `pt_shawarma` | stand-in | Poutine with gravy and toppings in a takeout box | Pexels 27703382 |
| `pt_bbq` | stand-in | Fries loaded with meat, melted cheese and herbs | Pexels 20535803 |
| `pt_buffalo` | stand-in | Fries loaded with chicken, melted cheese and herbs | Pexels 20535802 |
| `pt_bacon` | close | Crispy fries topped with melted cheese and bacon | Pexels 30301744 |
| `pt_veggie` | stand-in | Poutine topped with fresh vegetables | Pexels 6734552 |
| `dr_can` | exact | Single 355 ml pop can | Pexels 6920721 |
| `dr_2l` | exact | 2 litre pop bottle | Pexels 7196433 |
| `cat_spread` | exact | Several pizzas and wings laid out for a group | Pexels 19786203 |
