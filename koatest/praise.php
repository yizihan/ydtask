<?php 

	// $servername = "localhost";
	// $username = "root";
	// $password = "root";
	 
	// // 创建连接
	// $conn = new mysqli($servername, $username, $password);
	 
	// // 检测连接
	// if ($conn->connect_error) {
	//     die("连接失败: " . $conn->connect_error);
	// } 
	// echo "连接成功";

	class Conmysql {
		public $servername;
		public $username;
		public $password;
		public $dbname;
		public $con=null;

		public function __construct($servername, $username, $password, $dbname){
			$this->servername=$servername;
			$this->username=$username;
			$this->password=$password;
			$this->dbname=$dbname;
		}
		// 连接数据库
		public function getConnection(){
			try {
				$dsn = "mysql:host=$this->servername;dbname=$this->dbname";
			    $this->con = new PDO($dsn, $this->username, $this->password);
			    // echo "连接成功"; 
			} catch(PDOException $e) {
			    echo $e->getMessage();
			}
		}
		// 更新数据
		public function updateData($sql){
			if($this->con == null) {
				$this->getConnection();
			}
			header('content-type:application/json;charset=utf8');
			$res = $this->con->exec($sql);
			$arr = array('result'=>$res);
			echo json_encode($arr);
			$this->closeCon();
		}
		// 关闭数据库连接
		public function closeCon(){
			$this->con = null;
		}
	}

	class realConn extends Conmysql {
		public function __construct($servername, $username, $password, $dbname){
			parent::__construct($servername, $username, $password, $dbname);
		}

		public function updateRealData(){
			$sql = "UPDATE text SET num=num+1 WHERE id=1";
			$this->updateData($sql);
		}
	}

	$praiseCon = new realConn('localhost', 'root', 'root', 'praise');
	$praiseCon->updateRealData();
 ?>