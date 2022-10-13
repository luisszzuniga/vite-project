<template>
    <div class="row justify-content-center mt-5">
        <div class="col-7 my-bg rounded row justify-content-center">
            <div class="col-8">
                <img class="mx-auto d-block" src="images/contact.png" alt="">

                <form action="">
                    <input class="form-control mt-5" type="text" name="email" placeholder="Email">
                    <input class="form-control mt-3" type="text" name="password" placeholder="Password">

                    <div class="row justify-content-end mt-3">
                        <div class="col-6">
                            <div class="border-bottom"></div>
                        </div>
                    </div>

                    <button class="my-button float-right my-4" type="submit">Connexion</button>
                </form>
            </div>

            <hr>

            <div class="col-8">
                <form action="">
                    <input class="form-control mt-5" type="text" name="firstname" placeholder="First name">
                    <input class="form-control mt-3" type="text" name="lastname" placeholder="Last name">
                    <input class="form-control mt-3" type="text" name="email" placeholder="Email">
                    <input class="form-control mt-3" type="text" name="password" placeholder="Password">

                    <div class="row justify-content-end mt-3">
                        <div class="col-6">
                            <div class="border-bottom"></div>
                        </div>
                    </div>

                    <button class="my-button float-right my-4" type="submit">Inscription</button>
                </form>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.my-bg
{
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.float-right
{
    float: right;
}
</style>