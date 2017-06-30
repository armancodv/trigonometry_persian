var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {

	$scope.info_name = ['مبانی','بازتاب و انتقال','جمع و تفاضل زوایا','زاویه 2 برابر','زاویه 3 برابر','نصف کمان','توان','ضرب به جمع','جمع به ضرب','معکوس مثلثاتی','مشتق','نمایی']
	$scope.info = ['basic','symmetry_shifts_periodicity','angle_sum_difference','double_angle','triple_angle','half_angle','power_reduction','product_to_sum','sum_to_product','inverse_trigonometric','derivative','exponential'];
	$scope.info_thumb = ['III','IV','V','VI','VII','VIII','IX','X','XI','XII','XIII','XIV'];

	$scope.info_titles = [];
	$scope.info_titles[0] = ['سینوس','کسینوس','تانژانت','کسکانت','سکانت','کتانژانت','فیثاغورس'];
	$scope.info_titles[1] = ['بازتاب در θ=0','بازتاب در θ=π/4','بازتاب در θ=π/2','انتقال π/2','انتقال π','انتقال 2π'];
	$scope.info_titles[2] = ['سینوس','کسینوس','تانژانت','سینوس معکوس','کسینوس معکوس','تانژانت معکوس'];
	$scope.info_titles[3] = ['سینوس','کسینوس','تانژانت','کتانژانت'];
	$scope.info_titles[4] = ['سینوس','کسینوس','تانژانت','کتانژانت'];
	$scope.info_titles[5] = ['سینوس','کسینوس','تانژانت','کتانژانت'];
	$scope.info_titles[6] = ['سینوس توان دوم','کسینوس توان دوم','سینوس توان سوم','کسینوس توان سوم','سینوس توان چهارم','کسینوس توان چهارم'];
	$scope.info_titles[7] = ['cos⁡θ.cosφ','sinθ.sinφ','sin⁡θ.cosφ','cos⁡θ.sinφ','tan⁡θ.tanφ'];
	$scope.info_titles[8] = ['sinθ±sinφ','cosθ+cosφ','cosθ-cosφ'];
	$scope.info_titles[9] = ['arcsin(x)+arccos(x)','arctan(x)+arccot(x)','arctan(x)+arctan(1/x)','sin(arccos(x))','sin(arctan(x))','cos(arctan(x))','cos(arcsin(x))','tan(arcsin(x))','tan(arccos(x))','cot(arcsin(x))','cot(arccos(x))'];
	$scope.info_titles[10] = ['d(sin(x))/dx','d(cos(x))/dx','d(tan(x))/dx','d(cot(x))/dx','d(sec(x))/dx','d(csc(x))/dx','d(arcsin(x))/dx','d(arccos(x))/dx','d(arctan(x))/dx','d(arccot(x))/dx','d(arcsec(x))/dx','d(arccsc(x))/dx'];
	$scope.info_titles[11] = ['cis(x)','sinθ','cosθ','tanθ','cscθ','secθ','cotθ','arcsin(x)','arccos(x)','arctan(x)','arccsc(x)','arcsec(x)','arccot(x)'];

	$scope.calculator = [];
	$scope.calculator[0] = 'trigonometric_calculator';
	$scope.calculator[1] = 'inverse_trigonometric_calculator';
	
	$scope.calculator_thumb = ['I','II'];

	$scope.calculator_name = [];
	$scope.calculator_name[0] = 'ماشین حساب مثلثاتی';
	$scope.calculator_name[1] = 'ماشین حساب معکوس مثلثاتی';

	$scope.input = [];
	$scope.input[0] = ['theta'];
	$scope.input[1] = ['x'];

	$scope.input_fa = [];
	$scope.input_fa[0] = ['θ (درجه)'];
	$scope.input_fa[1] = ['x'];


	$scope.output = [];
	$scope.output[0] = ['sin','cos','tan','cot','csc','sec'];
	$scope.output[1] = ['arcsin','arccos','arctan','arccot','arccsc','arcsec'];

	$scope.output_fa = [];
	$scope.output_fa['sin'] = 'سینوس';
	$scope.output_fa['cos'] = 'کسینوس';
	$scope.output_fa['tan'] = 'تانژانت';
	$scope.output_fa['cot'] = 'کتانژانت';
	$scope.output_fa['csc'] = 'کسکانت';
	$scope.output_fa['sec'] = 'سکانت';
	$scope.output_fa['arcsin'] = 'سینوس معکوس';
	$scope.output_fa['arccos'] = 'کسینوس معکوس';
	$scope.output_fa['arctan'] = 'تانژانت معکوس';
	$scope.output_fa['arccot'] = 'کتانژانت معکوس';
	$scope.output_fa['arccsc'] = 'کسکانت معکوس';
	$scope.output_fa['arcsec'] = 'سکانت معکوس';

	$scope.output_en = [];
	$scope.output_en['sin'] = 'sin(θ)';
	$scope.output_en['cos'] = 'cos(θ)';
	$scope.output_en['tan'] = 'tan(θ)';
	$scope.output_en['cot'] = 'cot(θ)';
	$scope.output_en['csc'] = 'csc(θ)';
	$scope.output_en['sec'] = 'sec(θ)';
	$scope.output_en['arcsin'] = 'arcsin(x) - deg';
	$scope.output_en['arccos'] = 'arccos(x) - deg';
	$scope.output_en['arctan'] = 'arctan(x) - deg';
	$scope.output_en['arccot'] = 'arccot(x) - deg';
	$scope.output_en['arccsc'] = 'arccsc(x) - deg';
	$scope.output_en['arcsec'] = 'arcsec(x) - deg';

	$scope.value = [];

	$scope.select_calculator = function(number) {
		$scope.calculator_id=number;
		$scope.value = [];
		$scope.value['sin']=0;
		$scope.value['cos']=0;	
		$scope.value['tan']=0;
		$scope.value['cot']=0;
		$scope.value['csc']=0;
		$scope.value['sec']=0;
		$scope.value['arcsin']=0;
		$scope.value['arccos']=0;
		$scope.value['arctan']=0;
		$scope.value['arccot']=0;
		$scope.value['arccsc']=0;
		$scope.value['arcsec']=0;
		$scope.result = [];
	};

	$scope.select_info = function(number) {
		$scope.page_id=number;
	};
	
	$scope.calculate = function() {
		$scope.result = [];
		if($scope.calculator_id==0) {
			$scope.theta=$scope.value['theta']*Math.PI/180;
			$scope.result['sin'] = Math.round(Math.sin($scope.theta)*1000000)/1000000;
			$scope.result['cos'] = Math.round(Math.cos($scope.theta)*1000000)/1000000;
			$scope.result['tan'] = Math.round(Math.tan($scope.theta)*1000000)/1000000;
			$scope.result['cot'] = Math.round(1/Math.tan($scope.theta)*1000000)/1000000;
			$scope.result['csc'] = Math.round(1/Math.sin($scope.theta)*1000000)/1000000;
			$scope.result['sec'] = Math.round(1/Math.cos($scope.theta)*1000000)/1000000;
		} else {
			$scope.result['arcsin'] = Math.round(Math.asin($scope.value['x'])*1000000*180/Math.PI)/1000000;
			$scope.result['arccos'] = Math.round(Math.acos($scope.value['x'])*1000000*180/Math.PI)/1000000;
			$scope.result['arctan'] = Math.round(Math.atan($scope.value['x'])*1000000*180/Math.PI)/1000000;
			$scope.result['arccot'] = Math.round(180*1000000-Math.atan($scope.value['x'])*1000000*180/Math.PI)/1000000;
			$scope.result['arccsc'] = Math.round(Math.asin(1/$scope.value['x'])*1000000*180/Math.PI)/1000000;
			$scope.result['arcsec'] = Math.round(Math.acos(1/$scope.value['x'])*1000000*180/Math.PI)/1000000;
		}
	}
 
});

function gotopage(page_number) {
    window.location.hash = '#page' + page_number;
	for(i=1;i<=4;i++) {
		if(i===page_number) {
			document.getElementById('page'+i).style.display='block';
		} else {
			document.getElementById('page'+i).style.display='none';
		}
	}
	document.body.scrollTop = document.documentElement.scrollTop = 0;
}