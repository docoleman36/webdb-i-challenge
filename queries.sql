-- Database Queries

-- Find all customers with postal code 1010
SELECT * FROM Customers WHERE postalcode = 1010;
-- Find the phone number for the supplier with the id 11
SELECT * FROM suppliers WHERE supplierid = 11
-- List first 10 orders placed, sorted descending by the order date
SELECT * FROM Orders ORDER BY orderdate desc
-- Find all customers that live in London, Madrid, or Brazil
SELECT * FROM customers WHERE city = "London" or city = "Madrid" or country = "Brazil"
-- Add a customer record for "The Shire", the contact name is "Bilbo Baggins" the address is -"1 Hobbit-Hole" in "Bag End", postal code "111" and the country is "Middle Earth"
INSERT INTO CUSTOMERS (CustomerName, Address, City, PostalCode, Country)
VALUES ("Bilbo Baggins", "1 Hobbit-Hole", "Bag End", 111, "Middle Earth")
-- Update Bilbo Baggins record so that the postal code changes to "11122"
UPDATE customers set postalcode = 11122, customername = "The Shire", contactname = "Bilbo Baggins" where customerid = 92
-- (Stretch) Find a query to discover how many different cities are stored in the Customers table. Repeats should not be double counted

-- (Stretch) Find all suppliers who have names longer than 20 characters. You can use `length(SupplierName)` to get the length of the name