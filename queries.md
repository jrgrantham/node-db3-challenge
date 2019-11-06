# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

select productname, categoryname
from products
join categories 
	on products.categoryid = categories.categoryid

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

select orderid, shippername
from orders
join shippers
	on orders.shipperid = shippers.shipperid
where orderdate < '1997-01-09'

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

select orderid, productname, quantity
from OrderDetails
join products
	on orderdetails.productid = products.productid
where orderid = 10251

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

select orderid as 'order', customername as customer, lastname as employee
from orders
join customers
	on orders.customerid = customers.customerid
join employees
	on orders.employeeid = employees.employeeid

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

select CategoryName, count(CategoryName) as 'Count'
from categories
join products
	on categories.categoryid = products.categoryid
group by CategoryName

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 

select orders.orderid, count(orders.orderid) as ItemCount
from orders
join orderdetails
	on orders.orderid = orderdetails.orderid
group by orders.orderid