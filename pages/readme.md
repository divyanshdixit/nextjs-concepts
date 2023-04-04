<!-- for dynamic nested routes -->
ex:- localhost:3000/product/1/review/1

make folder of name [id] => index.js => review folder => 1- index.js 2- [reviewId].js

<!-- for catch all routes use [...params].js -->
for main file for parent route either we can use "index.js" file or use optional [] from next like [[...params]].js (not working have to check this method)
