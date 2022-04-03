try {
    $database = "bitdotio";
    $host = "db.bit.io";
    $user = "mahimasarvaria_demo_db_connection";
    $password = "3JDD9_uTAAx3t3f33vraFb3TxxWAh";
    $connection = new PDO("mysql:dbname=$database; host=$host", $user, $password);
    $connection -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
} catch(PDOException $error) {
    echo "Connection Failed: " . $error -> getMessage();
}