# Membuat Simulasi CRUD Pada Toko Buku Online

## Penejelasan

### Ini merupakan backend untuk web aplikasi jual buku online, di mana para user yang ingin melakukan transaksi dan mencoba untuk berjualan di aplikasi ini perlu untuk melakukan registrasi terlebih dahulu agar mendapatkan otorisasi upload data buku terkait book's title dan book's price serta info siapa yang melakukan create data tersebut. Di sini saya menerapkan Role Base Access Control dengan beberapa peran yaitu User, Approver, dan Admin.

## Custom API Untuk Web Aplikasi

1. ### Register
    #### http://localhost:5000/auth/register

2. ### Login
    #### http://localhost:5000/auth/login

3. ### Get All Add Request
    #### http://localhost:5000/add

4. ### Create A New Add Request
    #### http://localhost:5000/add

5. ### Update Add Request Status by ID
    ### http://localhost:5000/add/:id

6. ### Delete Add Request by ID
    #### http://localhost:5000/add/:id

7. ### Get All Add Req History by Start and End Date
    #### http://localhost:5000/add/history?startDate=2023-08-31&endDate=2023-09-01



![alt text](/backend/assets/Flowchart%20Diagram.jpg)

