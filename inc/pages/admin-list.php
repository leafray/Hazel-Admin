<section class="content-header" data-id="admin">
	<div class="box">
		<div class="row">
			<div class="col-12 col-sm-6 text-center text-sm-left">
				<h4>
					<i class="fa fa-bars"></i>
					Admin List
				</h4>
			</div>
			<div class="col-12 col-sm-6 text-sm-right">
				<a href="#" class="btn btn-success box-btn">
					<i class="fa fa-plus"></i>
					Add New Admin
				</a>
			</div>
		</div>
	</div>

	<div class="box">
		<div class="box-header"></div>
		<div class="box-body">
            <form action="" class="filterdata" method="post" accept-charset="utf-8">
				<input type="hidden" name="csrf_test_name" value="07e25fffe50c3f08a188dcd0cce6b05c">
                <div class="row">
                   <div class="col-12 col-sm-3">
                        <div class="form-group">
                            <select name="type" class="form-control" onchange="filter_data()">
                                <option value="">All Admin Types</option>
                                <option value="1">Super Admin</option>
                                <option value="2">Admin</option>
                                <option value="4">Operator</option>
                                <option value="5">customer</option>
                                <option value="6">test</option>
                                <option value="25">khrisna</option>
                                <option value="26">vxcvxc</option>
                            </select>
                    	</div>
                   </div>
                   <div class="col-12 col-sm-3">
                        <div class="form-group">
                            <select name="status" class="form-control" onchange="filter_data()">
                                <option value="">All Status</option>
                                <option value="1">Active</option>
                                <option value="0">Inactive</option>
                            </select>
                        </div>
                   </div>
                   <div class="col-12 col-sm-6">
                        <div class="form-group">
                            <input type="text" name="keyword" class="form-control" placeholder="Search from here..." onkeyup="filter_data()">
                        </div>
                   </div>
                </div>
            </form> 
      	
		</div> <!-- .box-body -->
	</div>
</section>