class ColophonsController < ApplicationController
  # GET /colophons
  # GET /colophons.json
  def index
    @colophons = Colophon.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @colophons }
    end
  end

  # GET /colophons/1
  # GET /colophons/1.json
  def show
    @colophon = Colophon.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @colophon }
    end
  end

  # GET /colophons/new
  # GET /colophons/new.json
  def new
    @colophon = Colophon.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @colophon }
    end
  end

  # GET /colophons/1/edit
  def edit
    @colophon = Colophon.find(params[:id])
  end

  # POST /colophons
  # POST /colophons.json
  def create
    @colophon = Colophon.new(params[:colophon])

    respond_to do |format|
      if @colophon.save
        format.html { redirect_to @colophon, notice: 'Colophon was successfully created.' }
        format.json { render json: @colophon, status: :created, location: @colophon }
      else
        format.html { render action: "new" }
        format.json { render json: @colophon.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /colophons/1
  # PUT /colophons/1.json
  def update
    @colophon = Colophon.find(params[:id])

    respond_to do |format|
      if @colophon.update_attributes(params[:colophon])
        format.html { redirect_to @colophon, notice: 'Colophon was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @colophon.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /colophons/1
  # DELETE /colophons/1.json
  def destroy
    @colophon = Colophon.find(params[:id])
    @colophon.destroy

    respond_to do |format|
      format.html { redirect_to colophons_url }
      format.json { head :no_content }
    end
  end
end
