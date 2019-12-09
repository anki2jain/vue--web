<template>
    <div>
        <h1>Contact page</h1>
        <p>
            email" {{email}} 
        </p>
        <br>
          <p>
            phone" {{phone}} 
        </p>

    </div>
</template>

<script>
export default {
    name:'contact',
    data (){
        return {
        email:"jain2naki@gmail",
        phone:86050655
    }}
}
</script>