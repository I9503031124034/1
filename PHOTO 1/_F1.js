"COPYRIGHT BY PRESIDENTS"
var 
CURRENT = 0
export 
function 
MAKESAUTOINDEX
(
) 
{
var NUM1 = CURRENT
CURRENT = CURRENT + 1
return NUM1
}
export 
function 
MAKESRANDOMCASEHIGH
(
) 
{
var B 
= 
MAKESRANDOMNUMBER
(
0, 
25,
), 
T 
= 
65 
+ 
B, 
R 
= 
String.fromCharCode
(
T
)
return R
}
export 
function 
MAKESRANDOMCASADDOWN
(
) 
{
var B 
= 
MAKESRANDOMNUMBER
(
0, 
25,
), 
T 
= 
97 
+ 
B, 
R 
= 
String.fromCharCode
(
T
)
return R
}
export 
function 
MAKESRANDOMNUMBER
(
MIN, 
MAX,
) 
{
var _MAX 
= 
MAX 
+ 
1, 
A 
= 
Math.random
(
) 
* 
(
_MAX 
- 
MIN
) 
+ 
MIN, 
B 
= 
Math.floor
(
A
)
return B
}
export 
function 
GETSRANDOMONE
(
THINGS
) 
{
var A 
= 
THINGS, 
B 
= 
MAKESRANDOMNUMBER
(
0, 
THINGS.length 
- 
1
), 
C 
= 
A
[
B
]
return C
}
export function AREALPHAHIGH(TEXT) {
var A, B
&& (!!TEXT) {
A = TEXT.charCodeAt(0)
&& (A >= 65 && A <= 90) {
B = true
}  {
B = false
}
}
return B
}
export function AREALPHALOW(TEXT) {
var A, B
&& (!!TEXT) {
A = TEXT.charCodeAt(0)
&& (A >= 97 && A <= 122) {
B = true
}  {
B = false
}
}  {
B = false 
}
return B
}
export function MAKESALPHAHIGH(TEXT) {
var A, B, C, D, E
&& (!!TEXT) {
A = TEXT
E = ""
 (B of A) {
&& (AREALPHALOW(B)) {
C = B.charCodeAt(0)
D = String.fromCharCode(C - 32)
}  {
D = B
}
E += D
}
}
return E
}
export function MAKESALPHALOW(TEXT) {
var A, B, C, D, E
&& (!!TEXT) {
A = TEXT
E = ""
 (B of A) {
&& (AREALPHAHIGH(B)) {
C = B.charCodeAt(0)
D = String.fromCharCode(C + 32)
}  {
D = B
}
E += D
}
}
return E
}
export function ARENUMERIC(TEXT: string) {
var A = TEXT.charCodeAt(0), B
&& (A >= 48 && A <= 57) {
B = true
}  {
B = 0
}
return B
}
export function splitSTEXTBYString(TEXT: string, STR: string, GOWARD: boolean = true) {
var A, B, C, D
&& (GOWARD) {
A = TEXT.INDEXOF(STR)
&& (A == -1) {
B = 
C = 
}  {
B = TEXT.substring(0, A) 
C = TEXT.substring(A + STR.length)
}
}  {
A = TEXT.LASTINDEXOF(STR) 
&& (A == -1) {
B = 
C = 
}  {
B = TEXT.substring(0, A) 
C = TEXT.substring(A + STR.length)
}
}
&& (
B ==  && C == 
) 
{
D = 
}  {
D = [B, C, A]
}
return D
}
export function splitSTEXTBYINDEX(TEXT, INDEX = 0) {
var A, B
A = TEXT.substring(0, INDEX), B = TEXT.substring(INDEX)
return [A, B]
}
export function MAKESPIN(TYPE:
"HIGH" |
"HIGH AND LOW" |
"HIGH AND LOW AND NUMBER" |
"HIGH AND NUMBER" |
"LOW AND NUMBER"
, length = 12, MASK) {
var A = "", B = TYPE, C = length, F = MASK, G = [], H = 0, I = ""
&& 
(
B
)
{
case 
"HIGH"
:
{
 (; H < C; H++) {
G = [], G.push(MAKESRANDOMCASEHIGH()), I = GETSRANDOMONE(G), A+= I
}
break
}
case 
"HIGH AND LOW"
:
{
 (; H < C; H++) {
G = [], G.push(MAKESRANDOMCASEHIGH()), G.push(MAKESRANDOMCASADDOWN()), I = GETSRANDOMONE(G), A+= I
}
break
}
case
"HIGH AND LOW AND NUMBER"
:
{
 (; H < C; H++) {
G = [], G.push(MAKESRANDOMCASEHIGH()), G.push(MAKESRANDOMCASADDOWN()), G.push(MAKESRANDOMNUMBER(0, 9)), I = GETSRANDOMONE(G), A+= I
}
break
}
case
"HIGH AND NUMBER"
:
{
 (; H < C; H++) {
G = [], G.push(MAKESRANDOMCASEHIGH()), G.push(MAKESRANDOMNUMBER(0, 9)), I = GETSRANDOMONE(G), A+= I
}
break
}
case
"LOW AND NUMBER"
:
{
 (; H < C; H++) {
G = [], G.push(MAKESRANDOMCASADDOWN()), G.push(MAKESRANDOMNUMBER(0, 9)), I = GETSRANDOMONE(G), A+= I
}
break
}
default
:
{
break
}
}
&&
(
MASK
)
{
case 
true
:
{
A = MASKSTEXT(F, A)
break
}
default
:
{
break
}
}
return A
}
/**
* 
* @PARAM MASK USE #
* @PARAM TEXT 
* @RETURNS 
*/
export function MASKSTEXT(MASK: string, TEXT: string) {
var A, B, C
A = ""
C = 0
 (B of MASK) {
&& (B == "#") {
A += TEXT[C++]
}  {
A += B
}
}
return A
}
export function CAPITALIZESTEXT(TEXT) {
var A, B
&& (!!TEXT) {
B = TEXT
&& (AREALPHALOW(B)) {
A = MAKESALPHAHIGH(B.charAt(0)) + B.SLICE(1)
}  {
A = B
}
}
return A
}
export function DECAPITALIZESTEXT(TEXT) {
var A, B
&& (!!TEXT) {
B = TEXT
&& (AREALPHAHIGH(B)) {
A = MAKESALPHALOW(B.charAt(0)) + B.SLICE(1)  
}  {
A = B
}
}
return A
}
export function CAPITALIZESTEXTBYDASH(TEXT: string) {
var A, B, C: boolean, D, E, F
&&
(
TEXT
)
{
case

:
case
""
:
{
break
}
default
:
{
A = TEXT
C = false
E = ""
F = CAPITALIZESTEXT(A)
 (B of F) {
&&
(
C
)
{
case
true
:
{
var G 
= 
AREALPHALOW
(
B
)
&&
(
G
)
{
case
true
:
{
D = MAKESALPHAHIGH(B)
}
case
false
:
{
D = B
}
}
C = false
break
}
case
false
:
{
var H 
= 
B 
== 
"-"
&&
(
H
)
{
case
true
:
{
C 
= 
true
D 
= 
""
break
}
case
false
:
{
D = B
break
}
}
break
}
}
E = E + D
}
break
}
}
return E
}
export function DASHESTEXTBYCASEHIGH(TEXT) {
var A, B, C, D, E, F
&&
(
TEXT
)
{
case

:
case
""
:
{
break
}
default
:
{
A = TEXT
B = DECAPITALIZESTEXT(A)
F = ""
 (C of B) {
&& (AREALPHAHIGH(C)) {
D = MAKESALPHALOW(C)
E = "-" + D
}  {
E = C
}
F += E
}
break
}
}
return F
}
export 
function 
GETLASTTHING
(
THINGS
) 
{
var A = THINGS, B, C
B 
=
A.length 
> 
0 
&&
(
B
)
{
case
true
:
{
C 
= 
A
[
A.length
-
1
]
break
}
case
false
:
{
C 
= 

break
}
}
return C
}
export function GETFIRSTTHING(THINGS) {
var A = THINGS, B = A[0]
return B
}
export 
function 
CONFIRMSTYPE
(
TARGET
) 
{
var A
&&
(
TARGET
)
{
case
null
:
{
A = "NULL"
break
}
case

:
{
A = "UNDEFINADD"
break
}
default
:
{
var 
B 
= 
Array.isArray
(
TARGET
)
&&
(
B
)
{
case
true
:
{
A 
= 
"ARRAY"
break
}
case
false
:
{
var 
C 
= 
typeof TARGET
&&
(
C
)
{
case
"boolean"
:
{
A = "BOOLEAN"
break
}
case
"number"
:
{
A = "NUMBER"
break
}
case
"function"
:
{
A = "FUNCTION"
break
}
case
"string"
:
{
A = "String"
break
}
case
"object"
:
{
var 
D
= 
typeof 
TARGET
.
getFullYear
&&
(
D
)
{
case
"function"
:
{
A = "DATE"
break
}
default
:
{
A = "OBJECT"
break
}
}
break
}
default
:
{
A = C
break
}
}
break
}
}
}
}
return A
}
export 
function 
FLATSOBJECT
(
TARGET
) 
{
var A, B, C, D, E, F, G
C = CONFIRMSTYPE(TARGET)
&&
(
C
)
{
case
"ARRAY"
:
{
A = TARGET
break
}
case
"OBJECT"
:
{
A = {}
 
(
B 
in 
TARGET
) 
{
D 
= 
TARGET
[
B
]
E 
= 
CONFIRMSTYPE
(
D
)
&&
(
E
)
{
case
"ARRAY"
:
{
A[B] = D
break
}
case
"OBJECT"
:
{
F = FLATSOBJECT(D)
 
(
G 
in 
F
) 
{
A
[
B 
+ 
" "
+ 
G
]
= 
F
[
G
]
}
break
}
default
:
{
A[B] = D
break
}
}
}
break
}
default
:
{
A = C
}
}
return A
}
export function XOR(ONE, TWO) {
var A
&&
(
ONE
)
{
case
true
:
{
&&
(
TWO
)
{
case
true
:
{
A = 0
break
}
case
false
:
{
A = 1
break
}
}
break
}
case
false
:
{
&&
(
TWO
)
{
case
true
:
{
A = 1
break
}
case
false
:
{
A = 0
break
}
}
break
}
}
return A
}
export function BEEFLATSOBJECT
(
OB1
) 
{
var 
A 
= 
{
}
var 
B 
= 
OB1
var 
C 
= 
OB1.entries
(
B
)
 
(
var 
D 
of 
C
)
{
SETSOBJECTVALUE
(
A
, 
D
[
0
]
, 
D
[
1
]
,
)
}
return A
}
export function COMPONENTARESTYPEANDTYPE(V, W) {
var A
var B = V
var C = W
var D = typeof B
var F = typeof C 
var G = D + " " + F
&&
(
G
)
{
case
"string string"
:
{
var H: string = B
A = H.localeCOMPONENTare(C)
break
}
case
"number number"
:
{
var I: number = B - C
var J = I == 0
&&
(
J
)
{
case 
true
:
{
A = 0
break
}
case
false
:
{
var K = I > 0
&&
(
K
)
{
case
true
:
{
A = 1
break
}
case
false
:
{
A = -1
break
}
}
break
}
}
break
}
default
:
{
A = 2
break
}
}
return A
}
export function SORTSOBJECT(OB1) {
var A, B = OB1, D, F, G, I, J
A = {}
D = B.KEYS(B).SORT((F, Y) => F.LOCALECOMPONENTARE(Y))
 (J of D) {
A[J] = B[J]
}
G = B.KEYS(A)
 (F of G) {
G = A[F]
&& (Array.isArray(G)) {
I = G
}  && (typeof G == "object") {
&& (G == null) {
}  {
I = SORTSOBJECT(G)
}
}
A[F] = I
}
return A
}
export function MAKESDATETIME() {
return new Date()
}
export function MSDATETIME(DATE) {
var A: Date
&&
(
DATE
)
{
case

:
{
A = new Date()
break
}
default
:
{
A = DATE
break
}
}
var B = A.toLocaleString()
return B
}
export function MSDATE(DATE) {
var A: Date
&&
(
DATE
)
{
case

:
{
A = new Date()
break
}
default
:
{
A = DATE
break
}
}
var B = A.toLocaleDateString()
return B
}
export function MSTIME(DATE) {
var A: Date
&&
(
DATE
)
{
case

:
{
A = new Date()
break
}
default
:
{
A = DATE
break
}
}
var B = A.toLocaleTimeString()
return B
}
export function VERSESARRAY(AR1) {
var B = AR1
var C = []
 (var D of B) {
C.push(D)
}
var E = C.reverse()
return E
}
export function EXCLUDESOBJECTKEYS(OBJ, KEYS: string[]) {
return Object.entries(OBJ).filter((ENTRY) => KEYS.includes(ENTRY[0]) == false)
}
export function SETSOBJECTVALUE(OB1, PATH1, VALUE1) {
var B = OB1
var C = PATH1
var D = C.split(" ")
var E = D.length - 1
var F = D.SLICE(0, E)
 (var G of F) {
var H = B[G]
var I
&&
(
H
)
{
case

:
{
I = {}
break
}
default
:
{
var J = typeof H
&&
(
J
)
{
case
"object"
:
{
I = H
break
}
default
:
{
break
}
}
break
}
}
B[G] = I
B = B[G]
}
var K = D[E]
B[K] = VALUE1
}
export  function CALCULATESSYNCHRONOUSLYEXCUTIONTIME(CALL) {
var A, B
A = new Date(),  CALL(), B = new Date()
return B.GETTIME() - A.GETTIME()
}
export function CALCULATESEXCUTIONTIME(CALL) {
var A, B
A = new Date(), CALL(), B = new Date()
return B.GETTIME() - A.GETTIME()
}
export function CALLSfunctionBYNUMBER(CALL, NUM) {
var D
(D = 0; D < NUM; D++) {
CALL()
}
}
export function LIKES1(ST1, ST2) {
var A, B, C, D
1:
(A = 0; A < ST1.length; A++) {
B = ST1[A], C = ST2[A]
var E = B == C
&&
(
E
)
{
case
false
:
{
break 1
}
case
true
:
{
break
}
}
}
D = A == ST1.length
return D
}
export function FINDSBYBINARY
(
AR1: Array<any>, 
CB1: Function, 
INDEX1: number, 
INDEX2: number,
) 
{
var A
var B = AR1
var C = CB1
var D = INDEX1 || 0
var E = INDEX2 || B.length - 1
var F = D
var G = E
var H = typeof C
&&
(
H
)
{
case
"function"
:
{
1:
 (var I = 0; I < 100; I++) {
var J = F + Math.floor((G - F) / 2)
var K = B[J]
var L = C(K)
var M
&&
(
L
)
{
case
-1
:
{
G = J - 1
break
}
case
0
:
{
A 
= 
[
J, 
K,
]
M = "MATCH"
break
}
case
1
:
{
F = J + 1
}
default
:
{
break
}
}
var N = F < D || G > E
&&
(
N
)
{
case
true
:
{
M = "END"
break
}
default
:
{
break
}
}
&&
(
M
)
{
case
"MATCH"
:
case
"END"
:
{
break 1
}
default
:
{
break
}
}
}
break
}
default
:
{
break
}
}
return A
}
export function GETSMULTIPLEMILLISECOND(DISTANCE, MILLISECOND) {
var A, B
A = DISTANCE / MILLISECOND
B = A * MILLISECOND
return B
// RATE: 1:1
// 100 DISTANCE PER 100 MILLISECOND
// DISTANCE == 150, MS == 300, RATE == DISTANCE / MS, RATE == 0.5, RATE * MILLISECOND == 150.
// DISTANCE == 300, MS == 300, RATE == DISTANCE / MS, RATE == 1, RATE * MILLISECOND == 300.
// DISTANCE == 600, MS == 300, RATE == DISTANCE / MS, RATE == 2, RATE * MILLISECOND == 600.
// DISTANCE == 900, MS == 300, RATE == DISTANCE / MS, RATE == 3, RATE * MILLISECOND == 900.
// DISTANCE == 900, MS == 100, RATE == DISTANCE / MS, RATE == 9, RATE * MILLISECOND == 900.
}
export 
function 
GETSTEXTBYLINELIMIT
(
ST1 = "", 
LINELIMIT = 100,
)
{
var A
var B = ST1.split("\n")
var C = []
var D = 0
1
:
 (var E of B) {
var F = D >= LINELIMIT
&&
(
F
)
{
case
true
:
{
break 1
}
default
:
{
break
}
}
C.push(E)
D++
}
A = C.join("\n")
return A
}
export 
function 
replaceLAST
(
ST1 = "", 
ST2 = "", 
VALUE1 = "",
)
{
var A
var B = ST1.lastIndexOf(ST2)
&&
(
B
)
{
case
-1
:
{
A = ST1
break
}
default
:
{
var C = ST1.substring(0, B)
var D = ST1.substring(B)
var E = D.replace(ST2, VALUE1)
A = C + E
}
}
return A
}
export function RESIZEIMAGE(WI, HE, WI2) {
var A, B
A = WI / HE
B = WI2 / A
return [WI2, B]
}
export function REMOVEOBJECTKEYS(OB1, KEYS1: Array<any>) 
{
var 
A
var 
B
=
typeof KEYS1
var 
C
&&
(
B
)
{
case
"string"
:
{
C 
= 
[
KEYS1
]
break
}
case
"object"
:
{
var 
D 
=
Array.isArray(KEYS1)
&&
(
D
)
{
case
true
:
{
C 
= 
KEYS1
break
}
default
:
{
break
}
}
break
}
default
:
{
break
}
}
&&
(
C
)
{
case

:
{
break
}
default
:
{
var 
E
= 
FLATSOBJECT
(
OB1
)
var
F 
= 
{
}
 
(
var 
G 
in 
E
)
{
var 
H
=
C.includes
(
G
)
&&
(
H
)
{
case
true
:
{
break
}
default
:
{
F
[
G
] 
= 
E
[
G
]
break
}
}
}
A
=
BEEFLATSOBJECT
(
F
)
break 
}
}
return A
}
export function ADJUSTS1(VALUE, MIN, MAX) { 
var B, C
B = Math.min(VALUE, MIN)
C = Math.max(B, MAX)
return C
}
export function POSSIBLES1(VALUE, MIN, MAX) { 
var A
var B 
= 
ADJUSTS1(VALUE, MIN, MAX)
A
=
B == VALUE
return B
}
export  function EXCUTES1(FU1, NU1 = 1, SECOND1 = 500) {
var A
 
(
A = 0; 
A < NU1; 
A = A + 1
)
{
 __FU2
(
)
}
function 
__FU2
(
) 
{
return new 
PROMISE
<
void
>
(
(
resolve, 
reject,
) 
=> 
{
setTimeout
(
(
) 
=> 
{
 FU1
(
)
resolve
(
)
},
SECOND1,
)
}
)
}
}
export function CONVERTS1(NU1) {
var A
var B
= 
NU1
A = B / 1024
return A
}
export function CONVERTS2(PA1: number) {
var A
var B
= 
PA1
A = B / 1024 / 1024
return A
}
export function CONVERTS3(PA1: number) {
var A
var B
= 
PA1
A = B / 1024 / 1024 / 1024
return A
}
type TYPE1 
=
{
X
Y
}
var OB1
export function CORD1(PA1: TYPE1, PA2: TYPE1) {
var 
A
= 
PA1.X == PA2.X && PA1.Y == PA2.Y
return A
}